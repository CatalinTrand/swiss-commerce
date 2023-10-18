import React from 'react';
import styles from './Header.module.scss';
import testIds from '../../componentTestIds';

const Header = () => (
  <div className={styles.headerWrapper} data-testid={testIds.components.header.wrapper}>
    <h2>Fischer-mann</h2>
  </div>
);

export default Header;