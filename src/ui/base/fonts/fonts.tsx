import * as classNames from 'classnames';
import * as React from 'react';
import styles from './fonts.css';

type FontType = 'title' | 'subtitle' | 'normal';
type Color = 'standard' | 'white';
type Alignment = 'left' | 'center' | 'right';

function createFont(type: FontType) {
  return ({ children, color, align }: { children: any, color?: Color, align?: Alignment }) => {
    const actualColor: Color = color || 'standard';
    const actualAlign: Alignment = align || 'left';
    return (
      <div className={classNames(
        styles[type],
        styles[actualColor],
        styles[actualAlign],
      )}>{children}</div>
    );
  };
};

export namespace Fonts {
  export const Title = createFont('title');
  export const Subtitle = createFont('subtitle');
  export const Normal = createFont('normal');
}
