import { Box, Container } from '@mui/material';
import { TopBar } from '../components/TopBar';
import { SideBar } from '../components/SideBar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <>
    <Box sx={{ display: 'flex' }}>
      <SideBar TopBar={TopBar}>
        <Container fixed>
          <Outlet />
        </Container>
      </SideBar>
      <TanStackRouterDevtools />
    </Box>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
