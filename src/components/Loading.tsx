import { CircularProgress, Stack } from '@mui/material';

export const Loading = () => {
  return (
    <Stack
      sx={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', py: 3 }}
    >
      <CircularProgress size={32} />
    </Stack>
  );
};
