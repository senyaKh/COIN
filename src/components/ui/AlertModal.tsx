import React from 'react';
import { Modal, Button } from 'antd';

interface ModalProps {
 title: string;
 message: string;
 image?: string; 
 open: boolean;
 onClose: () => void;
}

const AlertModal: React.FC<ModalProps> = ({ title, message, image, open, onClose }) => {
 return (
    <Modal
      title={title}
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Закрыть
        </Button>,
      ]}
    >
      <p>{message}</p>
      {image && <img src={image} alt="Modal" style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} />}
    </Modal>
 );
};

export default AlertModal;
