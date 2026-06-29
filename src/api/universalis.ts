import { getWithRetry } from './axios';
import { UniversalisAggregatedResponse, UniversalisItemResponse } from './types';

// https://docs.universalis.app/#marketable-items
export async function getMarketableItemIds(): Promise<number[]> {
  const data = await getWithRetry<number[]>('/marketable');
  return data;
}

// https://docs.universalis.app/#current-item-price
export async function getAggregated(
  worldDcRegion: string,
  itemIds: number[]
): Promise<UniversalisAggregatedResponse> {
  const data = await getWithRetry<UniversalisAggregatedResponse>(
    `/aggregated/${worldDcRegion}/${itemIds.join(',')}`
  );
  return data;
}

// https://docs.universalis.app/#market-board-current-data
export async function getMarketBoardCurrentData(
  worldDcRegion: string,
  itemId: number,
  hq: boolean
): Promise<UniversalisItemResponse> {
  const data = await getWithRetry<UniversalisItemResponse>(
    `/${worldDcRegion}/${itemId}?hq=${hq ? '1' : '0'}`
  );
  return data;
}
