import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { fetchCoins } from '../../services/api/coincap';
import { Coin } from '../../services/types';
import AddButton from '../ui/AddButton';
import {columns} from '../common/Columns';
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
 return (
    <div onScroll={handleScroll} style={{ maxHeight: '100vh' }}>
      <Table
        columns={columns}
        dataSource={coins}
        loading={loading}
        pagination={{
          total: totalCoins,
          pageSize: 10, 
          current: currentPage,
          onChange: (page) => setCurrentPage(page),
        }}
      />
    </div>
 );
};

export default CoinTable;
