import * as React from 'react';
import obento from './obento.png';
import styles from './obento_logo.css';

export const ObentoLogo = () => (
  <div className={styles.logo}>
    <img className={styles.image} src={obento}/>
  </div>
);
