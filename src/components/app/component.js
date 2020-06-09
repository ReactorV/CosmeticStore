import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import CartPage  from '../../pages/cart-page';
import HomePage from '../../pages/homePage';

import './index.scss';

class App extends React.PureComponent {
    render() {
       return(
               <Switch>
                   <Route
                       path="/"
                       component={HomePage}
                   />
                   <Route
                       path="/cart"
                       component={HomePage}
                   />
               </Switch>
           );
    }
}

export default App;
