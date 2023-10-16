import './style.scss'
import React from 'react';
import testIds from '../../componentTestIds';

const Header = () => (
  <div className='header-wrapper' data-testid={testIds.components.header.wrapper}>
    <h2>Fischer-mann</h2>
  </div>
);

export default Header;