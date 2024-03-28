import React from 'react';
import { Coin } from '../../services/types';
import AddButton from '../ui/AddButton';
import { formatPrice, formatPercentage } from '../../utils/formatPrice';
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
    render: (price: any) => `$${formatPrice(price)}`,
 },
 {
    title: 'Market Cap (USD)',
    dataIndex: 'marketCapUsd',
    key: 'marketCapUsd',
    render: (marketCap: any) => `$${formatPrice(marketCap)}`,
 },
 {
    title: 'Change (24hr)',
    dataIndex: 'changePercent24Hr',
    key: 'changePercent24Hr',
    render: (change: any) => `${formatPercentage(change)}%`,
 },
 {
    title: 'Action',
    key: 'action',
    render: (text: string, record: Coin) => (
      <AddButton coinId={record.id} onAdd={handleAdd} />
    ),
 },
];
