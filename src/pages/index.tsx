import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CoinTable from '../components/pages/CoinTable';
import AlertModal from '@/components/ui/AlertModal';

const Home: React.FC = () => {
    const router = useRouter();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    useEffect(() => {
        const hasModalBeenShown = localStorage.getItem('modalShown');
        if (!hasModalBeenShown) {
            setIsModalVisible(true);
            localStorage.setItem('modalShown', 'true');
        }
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <AlertModal title="Внимание!!!" message="Из-за проблем с бесплатными api для получения logo криптовалют, все логотипы монет для которых не нашелся логотип были заменены на ошибочный, данное лого предоставлено ниже" image="/images/errorLogo.svg" open={isModalVisible} onClose={handleClose} />
            <CoinTable />
        </div>
    );
};

export default Home;
