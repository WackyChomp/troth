export { default as NavItems } from './NavItems';
export { default as MobileSidebar } from './MobileSidebar';
export { default as Header } from './Header';
export { default as StatsCard } from './StatsCard';

declare interface StatsCard{
  headerTitle: string;
  total: number;
  lastMonthCount: number;
  currentMonthCount: number;
}

// export { default as } from './';