import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { AnalysisResult } from '../../../providers/AnalysisProvider/schema';
import { useState } from 'react';
import { getComparator } from '../../../utils/comparator';
import { SortableTableCell } from '../../../components/Table';
import { ItemDetails } from './ItemDetails';
import { World } from './World';
import { Item } from './Item';

type ResultProps = {
  data: AnalysisResult;
};

type Order = {
  by: keyof AnalysisResult['items'][number];
  direction: 'asc' | 'desc';
};

export const Result = ({ data }: ResultProps) => {
  const [selectedItem, setSelectedItem] = useState<{ id: number; hq: boolean } | null>(null);
  const [order, setOrder] = useState<Order>({ by: 'expectedDailyProfit', direction: 'desc' });

  const sortHandler = (by: Order['by']) => {
    const active = order.by === by;
    return {
      onClick: () => {
        setOrder({ by, direction: active ? (order.direction === 'asc' ? 'desc' : 'asc') : 'asc' });
      },
      sortDirection: active ? order.direction : undefined,
      active,
      direction: order.direction,
    };
  };

  const items = order ? [...data.items].sort(getComparator(order.direction, order.by)) : data.items;

  return (
    <>
      <TableContainer component={Paper} elevation={5}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ whiteSpace: 'nowrap' }}>
            <TableRow>
              <TableCell>アイテム名</TableCell>
              <SortableTableCell {...sortHandler('buyWorldId')}>仕入先ワールド</SortableTableCell>
              <SortableTableCell {...sortHandler('buyPrice')}>仕入れ価格</SortableTableCell>
              <SortableTableCell {...sortHandler('netSell')}>出品想定価格</SortableTableCell>
              <SortableTableCell {...sortHandler('expectedDailySales')}>
                売上個数/日
              </SortableTableCell>
              <SortableTableCell
                sx={{ fontWeight: 'bold' }}
                {...sortHandler('expectedDailyProfit')}
              >
                利益/日
              </SortableTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(
              ({
                itemId,
                hq,
                buyWorldId,
                buyPrice,
                netSell,
                expectedDailySales,
                expectedDailyProfit,
              }) => {
                return (
                  <TableRow
                    key={itemId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                    onClick={() => setSelectedItem({ id: itemId, hq })}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      <Item itemId={itemId} hq={hq} />
                    </TableCell>
                    <TableCell>{buyWorldId && <World worldId={buyWorldId} />}</TableCell>
                    <TableCell>{buyPrice.toLocaleString()}</TableCell>
                    <TableCell>{Math.round(netSell).toLocaleString()}</TableCell>
                    <TableCell>{expectedDailySales.toFixed(2)}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: 'success.main' }}>
                      {Math.round(expectedDailyProfit).toLocaleString()}
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <ItemDetails
        key={selectedItem?.id}
        itemId={selectedItem?.id ?? null}
        hq={selectedItem?.hq ?? false}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
};
