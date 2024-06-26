export interface Coin {
	id: string;
	rank: number;
	symbol: string;
	name: string;
	supply: string;
	maxSupply: string;
	marketCapUsd: number; 
	volumeUsd24Hr: string;
	priceUsd: number; 
	changePercent24Hr: number; 
	vwap24Hr: string;
	logoUrl?: string;
	key?: string | number;
}
export interface CoinList {
	data: Coin[];
}
export interface InputProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	type?: string;
	value: string;
	styles?: string; 
 }
 export interface CoinTableBodyProps {
	coins: Coin[];
	loading: boolean;
	totalCoins: number;
	currentPage: number;
	setCurrentPage: (page: number) => void;
 }
