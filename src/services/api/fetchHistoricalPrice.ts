import axios from 'axios';
import { HistoricalPriceData } from '../../utils/chartsTypes';

interface ApiResponse {
 data: HistoricalPriceData[];
}

export const fetchHistoricalPrice = async (coinId: string, interval: 'h1'  | 'h12' | 'd1'): Promise<HistoricalPriceData[]> => {
 try {
    const now = new Date();
    let start: number;
    let end: number;

    switch (interval) {
      case 'd1':
        start = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()).getTime();
        end = now.getTime();
        break;
      case 'h12':
        start = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours() - 12).getTime();
        end = now.getTime();
        break;
      case 'h1':
        start = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours()).getTime();
        end = now.getTime();
        break;
      default:
        throw new Error('Invalid interval');
    }
    const response = await axios.get<ApiResponse>(`https://api.coincap.io/v2/assets/${coinId}/history?interval=m1&start=${start}&end=${end}`);
    
    const data = response.data.data;
    const formattedData = data.map((item) => ({
      time: new Date(item.time * 1000).getTime(), 
      priceUsd: item.priceUsd,
    }));
    return formattedData;
 } catch (error) {
    console.error('Failed to fetch historical price data:', error);
    return [];
 }
};
