export interface Coin {
	data: {
		 id: string;
		 rank: string;
		 symbol: string;
		 name: string;
		 supply: string;
		 maxSupply: string | null;
		 marketCapUsd: string;
		 volumeUsd24Hr: string;
		 priceUsd: string;
		 changePercent24Hr: string;
		 vwap24Hr: string;
		 explorer: string;
	};
	timestamp: number;
 }
 export interface CoinPageProps {
	coin: Coin;
 }
 