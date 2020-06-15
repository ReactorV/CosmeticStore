import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CartPage  from '../../pages/cartPage';
import HomePage from '../../pages/homePage';
import MasterPage from '../master-page';
import CartHeader from '../cart-header';
import withCosmeticsStoreService from '../hoc/withCosmeticsStoreSrvice';

import './index.scss';

class App extends React.PureComponent {
    render() {
        return(
            <>
                <CartHeader numItems={2} total={123} />
                <Switch>
                    <Route
                        path="/"
                        component={this.getPageComponent(<HomePage />)}
                        exact={true}
                    />
                    <Route
                        path="/cart"
                        component={this.getPageComponent(<CartPage />)}
                    />
                </Switch>
            </>
        );
    }

    getPageComponent = (component) => () => {
        return (
            <MasterPage>
                {component}
            </MasterPage>
        );
    }
}

export default withCosmeticsStoreService()(App);
