import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { UniversalisItemResponse } from '../../../api/types';
import { getMarketBoardCurrentData } from '../../../api/universalis';
import { Listings } from './Listings';
import { RecentHistory } from './RecentHistory';
import { Loading } from '../../../components/Loading';
import { Item } from './Item';

type ItemDetailsProps = {
  itemId: number | null;
  hq: boolean;
  onClose: () => void;
};

export const ItemDetails = ({ itemId, hq, onClose }: ItemDetailsProps) => {
  const initializeRef = useRef<boolean>(false);
  const [japanItem, setJapanItem] = useState<UniversalisItemResponse>();
  const [localItem, setLocalItem] = useState<UniversalisItemResponse>();

  useEffect(() => {
    if (initializeRef.current || !itemId) return;

    initializeRef.current = true;
    getMarketBoardCurrentData('Japan', itemId, hq).then(setJapanItem);
    getMarketBoardCurrentData('Mandragora', itemId, hq).then(setLocalItem);
  }, [japanItem, itemId, hq]);

  return (
    <Dialog onClose={onClose} open={itemId != null} maxWidth="lg" fullWidth>
      <DialogTitle>{itemId && <Item itemId={itemId} hq={hq} />}</DialogTitle>
      <DialogContent>
        {japanItem || localItem ? (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              {japanItem ? <Listings worldDcRegion="Japan" {...japanItem} /> : <Loading />}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {localItem ? (
                <Listings worldDcRegion="Mandragora" {...localItem} world />
              ) : (
                <Loading />
              )}
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              {japanItem ? <RecentHistory worldDcRegion="Japan" {...japanItem} /> : <Loading />}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              {localItem ? (
                <RecentHistory worldDcRegion="Mandragora" {...localItem} world />
              ) : (
                <Loading />
              )}
            </Grid>
          </Grid>
        ) : (
          <Loading />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
};
