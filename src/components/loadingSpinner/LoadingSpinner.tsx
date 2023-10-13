import React from "react";
import testIds from "../../componentTestIds";
import './style.scss';

const LoadingSpinner = () =>
    <div data-testid={testIds.common.loadingSpinner} className='loading-spinner'>
        Loading...
    </div>;

export default LoadingSpinner;