import React from 'react';
import { Coin } from '../../../utils/types';
import AddButton from './AddButton';
import { formatPrice, formatPercentage } from '../../../utils/formatPrice';
import Image from 'next/image';
import Styles from '@/styles/components/AddButton.module.scss';
const handleAdd = (coinId: string) => {
   console.log(`Add coin with ID: ${coinId}`);
};
export const columns = [
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
      <Image
        src={logoUrl}
        alt='logo'
        width={30}
        height={30}
        style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'center', width: '30px', height: '30px' }}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/images/errorLogo.svg';
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
   render: (price: any) => `$${formatPrice(price)}`,
   sorter: (a: Coin, b: Coin) => a.priceUsd - b.priceUsd,
 },
 {
   title: 'Market Cap (USD)',
   dataIndex: 'marketCapUsd',
   key: 'marketCapUsd',
   render: (marketCap: any) => `$${formatPrice(marketCap)}`,
   sorter: (a: Coin, b: Coin) => a.marketCapUsd - b.marketCapUsd,
 },
 {
   title: 'Change (24hr)',
   dataIndex: 'changePercent24Hr',
   key: 'changePercent24Hr',
   render: (change: any) => `${formatPercentage(change)}%`,
   sorter: (a: Coin, b: Coin) => a.changePercent24Hr - b.changePercent24Hr,
 },
 {
  title: 'Action',
  key: 'action',
  render: (text: string, record: Coin) => (
     <AddButton coinId={record.id} onClick={handleAdd}  className={Styles.addButton}/>
  ),
 },
];
