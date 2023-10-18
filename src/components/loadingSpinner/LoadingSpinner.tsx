import CircularProgress from '@mui/joy/CircularProgress';
import React from 'react';
import styles from './LoadingSpinner.module.scss';
import testIds from '../../componentTestIds';

const LoadingSpinner = () =>
  <div data-testid={testIds.components.loadingSpinner} className={styles.loadingSpinner}>
    <CircularProgress variant='soft'/>
  </div>;

export default LoadingSpinner;