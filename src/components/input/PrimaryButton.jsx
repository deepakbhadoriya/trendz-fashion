import React from 'react';

import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({ title = 'button', className, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {title}
    </button>
  );
};

export default PrimaryButton;
