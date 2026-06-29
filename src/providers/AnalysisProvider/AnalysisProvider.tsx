import { createContext, ReactNode, useContext } from 'react';
import { AnalysisResult, analysisResultsSchema } from './schema';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { useAnalysis } from './useAnalysis';

type AnalysisContext = {
  analyze: () => Promise<AnalysisResult | null>;
  analysisResults: AnalysisResult[];
  setAnalysisResults: (arg: AnalysisResult[]) => void;
} & Omit<ReturnType<typeof useAnalysis>, 'run'>;

const AnalysisContext = createContext<AnalysisContext>({
  analyze: async () => null,
  analysisResults: [],
  setAnalysisResults: () => {},
  progress: 0,
  running: false,
  completed: 0,
  total: 0,
});

type AnalysisContextProviderProps = {
  children: ReactNode;
};

export const AnalysisContextProvider = ({ children }: AnalysisContextProviderProps) => {
  const [analysisResults, setAnalysisResults] = useLocalStorageState<AnalysisResult[]>({
    cacheKey: 'analysis-results',
    schema: analysisResultsSchema,
    initialValue: [],
  });
  const { run, ...analysisProgress } = useAnalysis();

  const analyze = async () => {
    const result = await run();
    if (!result) return null;

    setAnalysisResults([result, ...analysisResults]);
    return result;
  };

  return (
    <AnalysisContext value={{ analyze, analysisResults, setAnalysisResults, ...analysisProgress }}>
      {children}
    </AnalysisContext>
  );
};

export const useAnalysisContext = () => {
  return useContext(AnalysisContext);
};
