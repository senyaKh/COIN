import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import CoinDetails from '@/components/common/CoinPage/CoinDetails';
import PriceChart from '@/components/common/CoinPage/PriceChart';
import AddButton from '@/components/common/TableCoins/AddButton';
import { fetchCoinById } from '@/services/api/fetchCoinsById'; 
import { CoinPageProps } from '@/utils/idCoinTypes';
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
			 <CoinDetails coin={coin} />
			 <PriceChart coinId={coinData.id} />
			 <button onClick={() => router.push('/', undefined, { shallow: true })}>Back</button>
			 <AddButton coinId={coinData.id} onClick={(coinId) => console.log(coinId)}/>
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
