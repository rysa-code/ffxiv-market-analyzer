import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { SideBarProps } from './SideBar';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';
import { useAnalysisContext } from '../providers/AnalysisProvider';

export const TopBar: SideBarProps['TopBar'] = ({ onSideBarToggle }) => {
  const { setAnalysisResults } = useAnalysisContext();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onSideBarToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FFXIV Market Analyzer
        </Typography>

        <IconButton color="error" edge="end" onClick={() => setAnalysisResults([])}>
          <DeleteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
