import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from '../styles/theme';
import { AnalysisContextProvider } from './AnalysisProvider/AnalysisProvider';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnalysisContextProvider>{children}</AnalysisContextProvider>
    </ThemeProvider>
  );
};
