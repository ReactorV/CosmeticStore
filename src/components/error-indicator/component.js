import React from 'react';

import './index.scss';

const baseClassName = 'error-indicator';

const ErrorIndicator = () => {
    return (
        <div className={baseClassName}>
            Error! Something went wrong!
        </div>
    );
};

export default ErrorIndicator;
