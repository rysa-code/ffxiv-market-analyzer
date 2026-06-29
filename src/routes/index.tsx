import {
  Box,
  Button,
  CircularProgress,
  circularProgressClasses,
  Stack,
  Typography,
} from '@mui/material';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useAnalysisContext } from '../providers/AnalysisProvider/AnalysisProvider';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { analyze, running, progress, completed, total } = useAnalysisContext();
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    const result = await analyze();
    if (!result) return;

    navigate({ to: `/analysis/${result.id}` });
  };

  return (
    <Stack sx={{ alignItems: 'center', gap: 5, py: 3 }}>
      <Button variant="contained" onClick={handleAnalyze} disabled={running}>
        分析する
      </Button>

      {running && (
        <Stack sx={{ gap: 1, width: '100%', alignItems: 'center' }}>
          <Box sx={{ position: 'relative' }}>
            <CircularProgress
              enableTrackSlot
              variant="determinate"
              value={progress}
              size={200}
              sx={{
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
            />
            <Stack
              sx={{
                inset: 0,
                top: 10,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
                {`${Math.round(progress)} %`}
              </Typography>

              <Typography variant="caption" color="textSecondary">
                {completed} / {total}
              </Typography>
            </Stack>
          </Box>

          <Typography variant="caption">データを分析しています...</Typography>
        </Stack>
      )}
    </Stack>
  );
}
