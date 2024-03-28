import axios from 'axios';
import { Coin } from '../../utils/types';

const API_URL = 'https://api.coincap.io/v2';

export const fetchCoinById = async (id: string): Promise<Coin | null> => {
 try {
    const response = await axios.get<Coin>(`${API_URL}/assets/${id}`);
    return response.data;
 } catch (error) {
    console.error('Error fetching coin by ID:', error);
    return null;
 }
};
