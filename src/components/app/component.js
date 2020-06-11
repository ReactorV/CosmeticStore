import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import CartPage  from '../../pages/cart-page';
import HomePage from '../../pages/homePage';
import MasterPage from '../master-page';

import './index.scss';

class App extends React.PureComponent {
    render() {
       return(
               <Switch>
                   <Route
                       path="/"
                       component={this.getPageComponent(<HomePage />)}
                   />
                   <Route
                       path="/cart"
                       component={HomePage}
                   />
               </Switch>
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

export default App;
