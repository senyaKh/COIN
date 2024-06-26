import React from 'react';
import Image from 'next/image';
import { Coin } from '@/utils/idCoinTypes';
import styles from '@/styles/components/CoinDetails.module.scss';

interface CoinDetailsProps {
 coin: Coin;
}

const CoinDetails: React.FC<CoinDetailsProps> = ({ coin }) => {
 return (
    <div className={styles.coinDetails}>
      <h1>{coin.data.name}</h1>
			<Image src={`https://www.cryptocdn.co/icons/colored/${coin.data.symbol.toLowerCase()}.svg`} width={300} height={300} alt="coin logo" className={styles.CoinLogo} onError={(e) => {
				 e.currentTarget.onerror = null;
				 e.currentTarget.src = '/images/errorLogo.svg';
			 }} />
      <p>Symbol: {coin.data.symbol}</p>
      <p>Rank: {coin.data.rank}</p>
      <p>Supply: {coin.data.supply}</p>
      <p>Price in USD: ${coin.data.priceUsd}</p>
      <p>Market Cap in USD: ${coin.data.marketCapUsd}</p>
      <p>Max Supply: {coin.data.maxSupply}</p>
    </div>
 );
};

export default CoinDetails;
