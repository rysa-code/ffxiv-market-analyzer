import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { SimpleBar } from '../../../components/SimpleBar';
import { timestampToString } from '../../../utils/timestampToString';
import { UniversalisItemResponse } from '../../../api/types';
import { World } from './World';
import { HqIcon } from './HqIcon';
import ScheduleIcon from '@mui/icons-material/Schedule';

type ListingsProps = Pick<UniversalisItemResponse, 'listings' | 'lastUploadTime'> & {
  worldDcRegion: string;
  world?: boolean;
};

export const Listings = ({ worldDcRegion, listings, lastUploadTime, world }: ListingsProps) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" sx={{ gap: 1, mb: 1, alignItems: 'flex-end' }}>
        <Typography variant="h6">出品一覧</Typography>
        <Typography variant="body1" sx={{ flex: 1 }}>
          {worldDcRegion}
        </Typography>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
          <ScheduleIcon sx={{ fontSize: '1rem' }} />
          <Typography variant="caption" sx={{ lineHeight: 1 }}>
            {timestampToString(lastUploadTime)}
          </Typography>
        </Stack>
      </Stack>

      <Box sx={{ height: 450 }}>
        <SimpleBar>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell>HQ</TableCell>
                <TableCell>価格</TableCell>
                {!world && <TableCell>ワールド</TableCell>}
                <TableCell>個数</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {listings.slice(0, 30).map((listing) => (
                <TableRow key={listing.listingID}>
                  <TableCell>{listing.hq && <HqIcon />}</TableCell>
                  <TableCell>{listing.pricePerUnit.toLocaleString()}</TableCell>
                  {!world && (
                    <TableCell>
                      <World worldId={listing.worldID} />
                    </TableCell>
                  )}
                  <TableCell>{listing.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </SimpleBar>
      </Box>
    </Paper>
  );
};
