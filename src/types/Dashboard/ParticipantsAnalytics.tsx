
export interface IChartData {
    date: string;
    amount: number;
  }
  
export interface IBarGraphData {
    x: number;
    y: number;
    [key: string]: any;
  }
  
export interface ICustomTooltipProps {
    active?: boolean;
    payload?: { value: string; payload: IChartData }[];
    label?: string;
  }