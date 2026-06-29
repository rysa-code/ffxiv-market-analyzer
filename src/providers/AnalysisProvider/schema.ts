import z from 'zod';

export const analysisResultSchema = z.object({
  id: z.uuid(),
  items: z.array(
    z.object({
      itemId: z.number(),
      hq: z.boolean(),
      sellPrice: z.number(),
      buyWorldId: z.number().optional(),
      buyPrice: z.number(),
      profitPerUnit: z.number(),
      netSell: z.number(),
      expectedDailySales: z.number(),
      expectedDailyProfit: z.number(),
    })
  ),
  timestamp: z.number(),
});

export const analysisResultsSchema = z.array(analysisResultSchema);

export type AnalysisResult = z.infer<typeof analysisResultSchema>;
