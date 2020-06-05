import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import CosmeticsStoreService from './services/cosmeticsStoreService';
import { CosmeticsStoreServiceProvider } from './components/cosmetics-store-service-context';
import ErrorBoundary from './components/error-boundary';
import App from './components/app';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <CosmeticsStoreServiceProvider value={CosmeticsStoreService}>
                <Router>
                    <App />
                </Router>
            </CosmeticsStoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
