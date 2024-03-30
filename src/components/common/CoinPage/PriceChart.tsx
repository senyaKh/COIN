import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchHistoricalPrice } from '@/services/api/fetchHistoricalPrice';
import { HistoricalPriceData } from '@/utils/chartsTypes';
import { Select } from 'antd';
import CustomTooltip from '@/utils/Customtooltip';

const PriceChart: React.FC<{ coinId: string }> = ({ coinId }) => {
 const [data, setData] = useState<HistoricalPriceData[]>([]);
 const [interval, setInterval] = useState<'d1' | 'h12' | 'h1'>('d1');

 useEffect(() => {
    const loadData = async () => {
      const historicalPriceData = await fetchHistoricalPrice(coinId, interval);
      setData(historicalPriceData);
    };

    loadData();
 }, [coinId, interval]);

 return (
    <div>
      <Select defaultValue="d1" style={{ width: 120 }} onChange={(value) => setInterval(value as 'd1' | 'h12' | 'h1')}>
        <Select.Option value="d1">Day</Select.Option>
        <Select.Option value="h12">12 Hours</Select.Option>
        <Select.Option value="h1">1 Hour</Select.Option>
      </Select>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
           dataKey="time"
           name="time"
           tickFormatter={(unixTime) => {
           const date = new Date(unixTime);
           return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
          }}
          />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="linear" dataKey="priceUsd" stroke="#8884d8" fill="none" strokeWidth={2} />


        </AreaChart>
      </ResponsiveContainer>
    </div>
 );
};

export default PriceChart;
