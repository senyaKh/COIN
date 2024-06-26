import { useState, useEffect } from 'react';
import { fetchCoins } from '@/services/api/coincap';
import { Coin } from '@/utils/types';

export const useCoins = (currentPage: number) => {
 const [coins, setCoins] = useState<Coin[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [totalCoins, setTotalCoins] = useState<number>(0);
const getLogoUrl = (symbol: string) => {
    return `/icons/color/${symbol.toLowerCase()}.svg`;
 };
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

 return { coins, loading, totalCoins };
};
