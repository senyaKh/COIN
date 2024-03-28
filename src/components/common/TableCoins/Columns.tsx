import React from 'react';
import { Coin } from '../../../utils/types';
import AddButton from './AddButton';
import { formatPrice, formatPercentage } from '../../../utils/formatPrice';
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
      <img
        src={logoUrl}
        alt='logo'
        width={30}
        height={30}
        style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'center' }}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/images/errorLogo.png';
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
     <AddButton coinId={record.id} onClick={handleAdd} />
  ),
 },
];
