import React from 'react';
import Styles from '../../styles/ui/AddButton.module.scss';
interface AddButtonProps {
	coinId: string;
	onAdd: (coinId: string) => void;
}
const AddButton: React.FC<AddButtonProps> = ({ coinId, onAdd }) => {
	return (
		<button className={Styles.addButton} onClick={() => onAdd(coinId)}>
			Add
		</button>
	);
};

export default AddButton;
