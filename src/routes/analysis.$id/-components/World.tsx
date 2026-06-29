import { Stack, Typography } from '@mui/material';
import { WORLD_MASTER } from '../../../constants';

type WorldProps = {
  worldId: number;
};

export const World = ({ worldId }: WorldProps) => {
  const world = WORLD_MASTER[worldId];

  return world ? (
    <Stack>
      <Typography variant="body2">{world.name}</Typography>
      <Typography variant="caption" color="textSecondary">
        {world.dcName}
      </Typography>
    </Stack>
  ) : (
    '?'
  );
};
