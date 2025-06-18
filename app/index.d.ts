
{/* ---- Data Types / Interfaces ---- */}

declare interface StatsCard{
  headerTitle: string;
  total: number;
  lastMonthCount: number;
  currentMonthCount: number;
}
declare interface TrendResult {
  trend: "increment" | "decrement" | "no change";
  percentage: number;
}

