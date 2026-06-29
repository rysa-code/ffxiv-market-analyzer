import { useRef, useState } from 'react';
import { getAggregated, getMarketableItemIds } from '../../api/universalis';
import { chunk } from '../../utils/chunk';
import { AnalysisResult } from './schema';
import { calcDCFlip } from '../../utils/calcDCFlip';

const CONCURRENCY = 5;
const MAX_ITEM_COUNT = 100;

export const useAnalysis = () => {
  const runningRef = useRef(false);
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);

  const progress = total === 0 ? 0 : (completed / total) * 100;

  const run = async (): Promise<AnalysisResult | null> => {
    if (runningRef.current) return null;

    runningRef.current = true;
    setRunning(true);
    setCompleted(0);

    const items: AnalysisResult['items'] = [];

    const tasks = chunk(await getMarketableItemIds(), 100).map((ids) => {
      return async () => {
        const response = await getAggregated('Mandragora', ids);
        items.push(
          ...response.results.flatMap((item) => {
            const flipResult: AnalysisResult['items'] = [];
            const nqProfit = calcDCFlip(item.nq);
            if (nqProfit) flipResult.push({ itemId: item.itemId, hq: false, ...nqProfit });
            const hqProfit = calcDCFlip(item.hq);
            if (hqProfit) flipResult.push({ itemId: item.itemId, hq: true, ...hqProfit });
            return flipResult;
          })
        );
      };
    });

    setTotal(tasks.length);

    let nextIndex = 0;
    async function worker() {
      while (true) {
        const current = nextIndex++;

        if (current >= tasks.length) {
          return;
        }

        try {
          await tasks[current]();
        } finally {
          setCompleted((v) => v + 1);
        }
      }
    }

    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, tasks.length) }, worker));

    setTotal(0);
    setRunning(false);
    setCompleted(0);
    setTotal(0);
    runningRef.current = false;

    console.log(items);

    return {
      id: crypto.randomUUID(),
      items: items
        .sort((a, b) => b.expectedDailyProfit - a.expectedDailyProfit)
        .slice(0, MAX_ITEM_COUNT),
      timestamp: Date.now(),
    };
  };

  return {
    run,
    progress,
    running,
    completed,
    total,
  };
};
