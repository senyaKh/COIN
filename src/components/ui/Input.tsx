import React from 'react';
import {InputProps} from '../../utils/types';
export const Input: React.FC<InputProps> = ({ onChange, placeholder, type = 'text', value, styles }) => {
 return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={styles}
    />
 );
};
