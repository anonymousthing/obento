import * as React from 'react';
import { Button } from 'ui/base/button/button';
import { Fonts } from 'ui/base/fonts/fonts';
import { ObentoLogo } from 'ui/base/obento_logo/obento_logo';
import styles from './home.css';

export class Home extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}><ObentoLogo/></div>
        <Fonts.Title>obento</Fonts.Title>
        <div className={styles.subtitle}>
          <Fonts.Subtitle align="center">A pre-packed lunchbox of React, TypeScript,<br/> MobX and PostCSS with CSS Modules.</Fonts.Subtitle>
        </div>
        <Button href="https://github.com/anonymousthing/obento">
          <Fonts.Normal color="white">Clone and eat immediately.</Fonts.Normal>
        </Button>
      </div>
    )
  }
}
