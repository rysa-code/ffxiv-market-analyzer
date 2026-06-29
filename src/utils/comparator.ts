function descendingComparator<T, Key extends keyof T>(a: T, b: T, orderBy: Key) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

export function getComparator<T extends object, Key extends keyof T>(
  order: 'asc' | 'desc',
  orderBy: Key
): (a: T, b: T) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
