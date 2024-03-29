import axios from 'axios';

interface HistoricalPriceData {
 time: string;
 price: number;
}

export const fetchHistoricalPrice = async (coinId: string, interval: 'd1' | 'h12' | 'h1'): Promise<HistoricalPriceData[]> => {
 try {
    const response = await axios.get(`https://api.coincap.io/v2/assets/${coinId}/history?interval=${interval}`);
    const data = response.data.data;
    const formattedData = data.map((item: any) => ({
      time: new Date(item.time).toLocaleTimeString(),
      price: item.priceUsd,
    }));
    return formattedData;
 } catch (error) {
    console.error('Failed to fetch historical price data:', error);
    return [];
 }
};
