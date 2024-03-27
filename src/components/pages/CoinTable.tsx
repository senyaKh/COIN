import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { fetchCoins } from '../../services/api/coincap';
import { Coin } from '../../services/types';
import AddButton from '../ui/AddButton';
interface CoinTableProps {}

const CoinTable: React.FC<CoinTableProps> = () => {
	const [coins, setCoins] = useState<Coin[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalCoins, setTotalCoins] = useState<number>(0);

	useEffect(() => {
		const loadCoins = async () => {
			setLoading(true);
			const fetchedCoins = await fetchCoins(currentPage);
			const coinsWithKeys = fetchedCoins.data.map((coin, index) => ({
				...coin,
				key: coin.id || index,
				logoUrl: getLogoUrl(coin.symbol),
			}));
			setCoins(coinsWithKeys);
			setTotalCoins(fetchedCoins.total);
			setLoading(false);
		};

		loadCoins();
	}, [currentPage]);

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
		if (scrollHeight - scrollTop === clientHeight) {
			setCurrentPage((prevPage) => prevPage + 1);
		}
	};

	const getLogoUrl = (symbol: string) => {
		return `https://www.cryptocdn.co/icons/colored/${symbol.toLowerCase()}.svg`;
	};
	const handleAdd = (coinId: string) => {
		console.log(`Add coin with ID: ${coinId}`);
	};
	return (
		<div onScroll={handleScroll} style={{ maxHeight: '100vh' }}>
			<Table
				columns={[
					{
						title: 'Symbol',
						dataIndex: 'symbol',
						key: 'symbol',
					},
					{
						title: 'Logo',
						dataIndex: 'logoUrl',
						key: 'logoUrl',
						render: (logoUrl: string) => (
							<img
								src={logoUrl}
								alt='logo'
								width={30}
								height={30}
								style={{ borderRadius: '50%' }}
								onError={(e) => {
									e.currentTarget.onerror = null;
									e.currentTarget.src = '/favicon.ico';
								}}
							/>
						),
					},
					{
						title: 'Name',
						dataIndex: 'name',
						key: 'name',
					},
					{
						title: 'Price (USD)',
						dataIndex: 'priceUsd',
						key: 'priceUsd',
						render: (price: any) => `$${Number(price).toFixed(2)}`,
					},
					{
						title: 'Market Cap (USD)',
						dataIndex: 'marketCapUsd',
						key: 'marketCapUsd',
						render: (marketCap: any) => `$${Number(marketCap).toFixed(2)}`,
					},
					{
						title: 'Change (24hr)',
						dataIndex: 'changePercent24Hr',
						key: 'changePercent24Hr',
						render: (change: any) => `${Number(change).toFixed(2)}%`,
					},
					{
						title: 'Action',
						key: 'action',
						render: (text: string, record: Coin) => (
							<AddButton coinId={record.id} onAdd={handleAdd} />
						),
					},
				]}
				dataSource={coins}
				loading={loading}
			/>
		</div>
	);
};

export default CoinTable;
