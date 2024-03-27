import axios from 'axios';
import { Coin } from '../types';

const API_URL = 'https://api.coincap.io/v2';

export const fetchCoins = async (
	page: number,
	perPage: number = 10
): Promise<{ data: Coin[]; total: number }> => {
	try {
		const response = await axios.get<{ data: Coin[]; total: number }>(
			`${API_URL}/assets?page=${page}&perPage=${perPage}`
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching coins:', error);
		return { data: [], total: 0 };
	}
};
