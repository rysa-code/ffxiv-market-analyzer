import { Box, Stack, Typography } from '@mui/material';
import { ITEM_MASTER } from '../../../constants';
import { CopyableText } from '../../../components/CopyableText';
import { HqIcon } from './HqIcon';

type ItemProps = {
  itemId: number;
  hq: boolean;
};

export const Item = ({ itemId, hq }: ItemProps) => {
  const item = ITEM_MASTER[String(itemId)];
  if (!item) return `Not Found Item: ${itemId}`;

  return (
    <Stack direction="row" sx={{ alignItems: 'center', gap: 1, whiteSpace: 'nowrap' }}>
      <Box component="img" src={item.icon} sx={{ width: 32, height: 32, borderRadius: 1 }} />
      <CopyableText text={item.name}>
        <Typography variant="body2">
          <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center' }}>
            {item.name}
            {hq && <HqIcon />}
          </Stack>
        </Typography>
      </CopyableText>
    </Stack>
  );
};
