import React from 'react';
import { useRouter } from 'next/router';
import { fetchCoinById } from '@/services/api/fetchCoinsById'; 
import { GetServerSidePropsContext } from 'next';
import { CoinPageProps } from '@/utils/idCoinTypes';
import Image from 'next/image';
const CoinPage: React.FC<CoinPageProps> = ({ coin }) => {
	const router = useRouter();
	if (router.isFallback) {
		 return <div>Loading...</div>;
	}
	if (!coin || !coin.data) {
		 return <div>Error: Coin not found</div>;
	}
	const { data: coinData } = coin;
 
	return (
		 <div>
			 <h1>{coinData.name}</h1>
			 <Image src={`https://www.cryptocdn.co/icons/colored/${coinData.symbol.toLowerCase()}.svg`} alt="coin logo" width={30} height={30} style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'center' }} onError={(e) => {
				 e.currentTarget.onerror = null;
				 e.currentTarget.src = '/images/errorLogo.png';
			 }} />
			 <p>Symbol: {coinData.symbol}</p>
			 <p>Rank: {coinData.rank}</p>
			 <p>Supply: {coinData.supply}</p>
			 <p>Price in USD: ${coinData.priceUsd}</p>
			 <p>Market Cap in USD: ${coinData.marketCapUsd}</p>
			 <p>Max Supply: {coinData.maxSupply}</p>
			 <button onClick={() => console.log('Add to portfolio')}>Add</button>
			 <button onClick={() => router.back()}>Back</button>
		 </div>
	);
};
 
export async function getServerSideProps(context: GetServerSidePropsContext) {
	if (!context.params || typeof context.params.id !== 'string') {
		 return {
			 notFound: true,
		 };
	}

	const { id } = context.params;
	const coin = await fetchCoinById(id);
	if (!coin) {
		 return {
			 notFound: true,
		 };
	}
	return {
		 props: { coin },
	};
}
 
export default CoinPage;
