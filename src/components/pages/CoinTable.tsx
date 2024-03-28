import React, { useState } from 'react';
import { Input } from '../ui/Input';
import Styles from '@/styles/ui/Input.module.scss';
import { useCoins } from '../../hooks/useCoins';
import { CoinTableBody } from '@/components/common/TableCoins/CoinTableBody';

const CoinTable: React.FC = () => {
 const [currentPage, setCurrentPage] = useState<number>(1);
 const [searchQuery, setSearchQuery] = useState<string>('');
 const { coins, loading, totalCoins } = useCoins(currentPage);

 const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
 );

 return (
    <>
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name"
        value={searchQuery}
        styles={Styles.input}
      />
      <CoinTableBody
        coins={filteredCoins}
        loading={loading}
        totalCoins={totalCoins}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
 );
};

export default CoinTable;
