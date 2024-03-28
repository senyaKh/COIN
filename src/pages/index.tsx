import React from 'react';
import CoinTable from '../components/pages/CoinTable';
import { useState } from 'react';
import { useEffect } from 'react';
import AlertModal from '@/components/ui/AlertModal';
const Home: React.FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => {
		 setIsModalVisible(true);
	};
	const handleClose = () => {
		 setIsModalVisible(false);
	};
	useEffect(() => {
    showModal();
 }, []);
	return (
		<div>
			<AlertModal title="Внимание!!!" message="Из-за проблем с бесплатными api для получения logo криптовалют, все логотипы монет для которых не нашелся логотип были заменены на ошибочный, данное лого предоставлено ниже" image="/images/errorLogo.png" open={isModalVisible} onClose={handleClose} />
			<CoinTable />
		</div>
	);
};

export default Home;
