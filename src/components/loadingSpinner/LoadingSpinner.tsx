import React from "react";
import testIds from "../../componentTestIds";
import './style.scss';
import CircularProgress from '@mui/joy/CircularProgress';

const LoadingSpinner = () =>
    <div data-testid={testIds.components.loadingSpinner} className='loading-spinner'>
        <CircularProgress variant='soft'/>
    </div>;

export default LoadingSpinner;