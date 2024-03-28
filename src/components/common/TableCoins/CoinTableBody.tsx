import React from 'react';
import { Table } from 'antd';
import { Coin } from '../../../services/types';
import { columns } from './Columns';
import { useRouter } from 'next/router';
interface CoinTableBodyProps {
 coins: Coin[];
 loading: boolean;
 totalCoins: number;
 currentPage: number;
 setCurrentPage: (page: number) => void;
}

export const CoinTableBody: React.FC<CoinTableBodyProps> = ({ coins, loading, totalCoins, currentPage, setCurrentPage }) => {
  const router = useRouter();

 const handleRowClick = (record : Coin) => {
    
    router.push(`/coin/${record.id}`);
 };
	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setCurrentPage(currentPage + 1);
    }
};


 return (
    <div onScroll={handleScroll} >
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
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
    </div>
 );
};
