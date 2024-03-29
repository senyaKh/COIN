import React from 'react';
import styles from '@/styles/components/PriceChart.module.scss';

interface PriceChartProps {
 coinId: string;
}
const PriceChart: React.FC<PriceChartProps> = ({ coinId }) => {
 		return <div className={styles.priceChart}>Graph base</div>;
};

export default PriceChart;
