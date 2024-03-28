import React from 'react';
import { Table } from 'antd';
import { Coin } from '../../../services/types';
import { columns } from './Columns';

interface CoinTableBodyProps {
 coins: Coin[];
 loading: boolean;
 totalCoins: number;
 currentPage: number;
 setCurrentPage: (page: number) => void;
}

export const CoinTableBody: React.FC<CoinTableBodyProps> = ({ coins, loading, totalCoins, currentPage, setCurrentPage }) => {
	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setCurrentPage(currentPage + 1);
    }
};


 return (
    <div onScroll={handleScroll} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
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
