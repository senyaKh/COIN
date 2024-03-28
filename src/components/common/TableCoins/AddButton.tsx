import React from 'react';
import Styles from '@/styles/ui/AddButton.module.scss';

interface AddButtonProps {
 coinId: string;
 onClick: (coinId: string) => void; 
}

const AddButton: React.FC<AddButtonProps> = ({ coinId, onClick }) => {
 return (
    <button className={`${Styles.addButton} addButton`} onClick={(event) => {
      event.stopPropagation(); 
      onClick(coinId);
    }}>
      Add
    </button>
 );
};

export default AddButton;
