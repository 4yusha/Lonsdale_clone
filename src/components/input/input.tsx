"use client";

import React from 'react';
import styles from './style.module.css';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, error }) => {
  return (
    <React.Fragment>
      <div className={styles.inputContainer}>
        <label>{label}</label>
        <input type={type} value={value} onChange={onChange} />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </React.Fragment>
  );
};

export default Input;
