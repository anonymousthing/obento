import * as React from 'react';
import { Fonts } from '../fonts/fonts';
import styles from './button.css';

export const Button = ({ children, href }: { children: any, href?: string }) => (
  <a className={styles.button} href={href}>
    {/*
        As a fallback, we wrap the children in a Fonts.Normal to ensure any
        loose string content is formatted correctly.
    */}
    <Fonts.Normal>{children}</Fonts.Normal>
  </a>
)
