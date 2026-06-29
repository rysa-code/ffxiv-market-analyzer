export type UniversalisAggregatedResponse = {
  results: UniversalisAggregatedItem[];
  failedItems: number[];
};

type UniversalisAggregatedItem = {
  itemId: number;
  nq: MarketData;
  hq: MarketData;
  worldUploadTimes: { worldId: number; timestamp: number }[];
};

export type MarketData = {
  minListing: {
    world?: PriceWorldRef;
    dc?: PriceWorldRef;
    region?: PriceWorldRef;
  };
  recentPurchase: {
    world?: PurchaseEntry;
    dc?: PurchaseEntry;
    region?: PurchaseEntry;
  };
  averageSalePrice: {
    world?: SimplePrice;
    dc?: SimplePrice;
    region?: SimplePrice;
  };
  dailySaleVelocity: {
    world?: QuantityEntry;
    dc?: QuantityEntry;
    region?: QuantityEntry;
  };
};

type PriceWorldRef = {
  price: number;
  worldId: number;
};

type PurchaseEntry = {
  price: number;
  timestamp: number;
  worldId: number;
};

type SimplePrice = {
  price: number;
};

type QuantityEntry = {
  quantity: number;
};

export type UniversalisItemResponse = {
  itemID: number;
  lastUploadTime: number;
  listings: {
    lastReviewTime: number;
    pricePerUnit: number;
    quantity: number;
    stainID: number;
    worldName: string;
    worldID: number;
    creatorName: string;
    creatorID: string | null;
    hq: boolean;
    isCrafted: boolean;
    listingID: string;
    materia: { slotID: number; materiaID: number }[];
    onMannequin: boolean;
    retainerCity: number;
    retainerID: string;
    retainerName: string;
    sellerID: string | null;
    total: number;
    tax: number;
  }[];
  recentHistory: {
    hq: boolean;
    pricePerUnit: number;
    quantity: number;
    timestamp: number;
    onMannequin: boolean;
    worldName: string;
    worldID: number;
    buyerName: string | null;
    total: number;
  }[];
  regionName: string;
  currentAveragePrice: number;
  currentAveragePriceNQ: number;
  currentAveragePriceHQ: number;
  regularSaleVelocity: number;
  nqSaleVelocity: number;
  hqSaleVelocity: number;
  averagePrice: number;
  averagePriceNQ: number;
  averagePriceHQ: number;
  minPrice: number;
  minPriceNQ: number;
  minPriceHQ: number;
  maxPrice: number;
  maxPriceNQ: number;
  maxPriceHQ: number;
  stackSizeHistogram: Record<string, number>;
  stackSizeHistogramNQ: Record<string, number>;
  stackSizeHistogramHQ: Record<string, number>;
  worldUploadTimes: Record<string, number>;
  listingsCount: number;
  recentHistoryCount: number;
  unitsForSale: number;
  unitsSold: number;
  hasData: boolean;
};
