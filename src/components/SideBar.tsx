import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { FunctionComponent, ReactNode, useState } from 'react';
import { useAnalysisContext } from '../providers/AnalysisProvider/AnalysisProvider';
import { Link } from '@tanstack/react-router';

export const DRAWER_WIDTH = 240;

export type SideBarProps = {
  TopBar: FunctionComponent<{ onSideBarToggle: () => void }>;
  children: ReactNode;
};

export const SideBar = ({ TopBar, children }: SideBarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { analysisResults: analysisResults } = useAnalysisContext();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = analysisResults && (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem
          component={Link}
          to="/"
          sx={{ display: 'contents', color: 'inherit', textDecoration: 'none' }}
          disablePadding
        >
          <ListItemButton>
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>

        <Divider />

        {analysisResults.map(({ id, timestamp }) => (
          <ListItem
            key={id}
            component={Link}
            to={`/analysis/${id}`}
            sx={{ display: 'contents', color: 'inherit', textDecoration: 'none' }}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={new Date(timestamp).toLocaleString()} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <TopBar onSideBarToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
          }}
          slotProps={{ root: { keepMounted: true } }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
          slotProps={{
            paper: { sx: { boxSizing: 'border-box', width: DRAWER_WIDTH } },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${DRAWER_WIDTH}px)` }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
