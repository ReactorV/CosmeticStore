import React from 'react';

class CosmeticsStoreService extends React.PureComponent {
     getCosmetics = () => {
        const api = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

        return fetch(api);
     }
}

export default CosmeticsStoreService;
