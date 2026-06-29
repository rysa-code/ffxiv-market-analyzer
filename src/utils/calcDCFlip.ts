import { MarketData } from '../api/types';
import { AnalysisResult } from '../providers/AnalysisProvider/schema';

type FlipResult = Omit<AnalysisResult['items'][number], 'itemId' | 'hq'>;

const getPrice = (v?: { price: number }) => v?.price ?? Infinity;
const getQty = (v?: { quantity: number }) => v?.quantity ?? 0;

const FEE_RATE = 0.05;

export const calcDCFlip = (item: MarketData): FlipResult | null => {
  const sellPrice = getPrice(item.averageSalePrice.world);
  if (!sellPrice || sellPrice === Infinity) return null;

  // 仕入れ候補（dc / region）
  const candidates = [item.minListing.dc, item.minListing.region].filter(Boolean) as {
    price: number;
    worldId?: number;
  }[];

  if (candidates.length === 0) return null;

  // 最安仕入れを選択
  const bestBuy = candidates.reduce((min, cur) => (cur.price < min.price ? cur : min));
  const buyPrice = bestBuy.price;

  // 仕入れ値が出品価格の1割を切っている場合はイレギュラーな取引履歴によるものなので無視
  if (buyPrice / (sellPrice + buyPrice) < 0.1) {
    return null;
  }

  const buyWorldId = bestBuy.worldId;

  // 手数料考慮した売却
  const netSell = sellPrice * (1 - FEE_RATE);

  const profitPerUnit = netSell - buyPrice;
  if (profitPerUnit <= 0) return null;

  const expectedDailySales = getQty(item.dailySaleVelocity.world);

  return {
    sellPrice,
    buyPrice,
    buyWorldId,
    netSell,
    profitPerUnit,
    expectedDailySales,
    expectedDailyProfit: profitPerUnit * expectedDailySales,
  };
};
