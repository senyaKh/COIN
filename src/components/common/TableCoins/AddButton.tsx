import React from 'react';
interface AddButtonProps {
 coinId: string;
 onClick: (coinId: string) => void;
 className?: string; 
}

const AddButton: React.FC<AddButtonProps> = ({ coinId, onClick, className }) => {
 return (
    <button
      className={`${className}`} 
      onClick={(event) => {
        event.stopPropagation();
        onClick(coinId);
      }}
    >
      Add
    </button>
 );
};

export default AddButton;
