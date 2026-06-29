import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { UniversalisItemResponse } from '../../../api/types';
import { timestampToString } from '../../../utils/timestampToString';
import { World } from './World';
import { HqIcon } from './HqIcon';

type RecentHistoryProps = Pick<UniversalisItemResponse, 'recentHistory'> & {
  worldDcRegion: string;
  world?: boolean;
};

export const RecentHistory = ({ worldDcRegion, recentHistory, world }: RecentHistoryProps) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" sx={{ gap: 1, mb: 1, alignItems: 'flex-end' }}>
        <Typography variant="h6">販売履歴</Typography>
        <Typography variant="body1" sx={{ flex: 1 }}>
          {worldDcRegion}
        </Typography>
      </Stack>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>HQ</TableCell>
              <TableCell>価格</TableCell>
              {!world && <TableCell>ワールド</TableCell>}
              <TableCell>日時</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {recentHistory.map((history, index) => (
              <TableRow key={index}>
                <TableCell>{history.hq && <HqIcon />}</TableCell>
                <TableCell>{history.pricePerUnit.toLocaleString()}</TableCell>
                {!world && (
                  <TableCell>
                    <World worldId={history.worldID} />
                  </TableCell>
                )}
                <TableCell>{timestampToString(history.timestamp * 1000)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
