import { TableCell, TableCellProps, TableSortLabel, TableSortLabelProps } from '@mui/material';

type SortableTableCellProps = Omit<TableCellProps, 'onClick' | 'children'> &
  Pick<TableSortLabelProps, 'active' | 'direction' | 'onClick' | 'children'>;

export const SortableTableCell = ({
  children,
  active,
  direction,
  onClick,
  ...props
}: SortableTableCellProps) => {
  return (
    <TableCell {...props}>
      <TableSortLabel active={active} direction={direction} onClick={onClick}>
        {children}
      </TableSortLabel>
    </TableCell>
  );
};
