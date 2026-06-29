import { Box } from '@mui/material';
import SimpleBarReact, { type Props as SimpleBarProps } from 'simplebar-react';

export const SimpleBar = ({ children, ...props }: SimpleBarProps) => {
  return (
    <Box sx={{ height: '100%', flex: 1, overflow: 'hidden' }}>
      <SimpleBarReact {...props} style={{ height: '100%', ...props.style }}>
        {children}
      </SimpleBarReact>
    </Box>
  );
};
