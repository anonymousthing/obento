import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ObentoLogo } from '../obento_logo';
import styles from './obento_logo.stories.css';

storiesOf('Obento logo', module)
  .add('Standard', () => {
    return (
      <div className={styles.background}>
        <ObentoLogo/>
      </div>
    );
  });
