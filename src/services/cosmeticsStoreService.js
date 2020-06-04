import React from 'react';

class cosmeticsStoreService extends React.PureComponent {
    api = 'http://makeup-api.herokuapp.com/api/v1/products.json';

     getCosmetics = (api) => {
        return fetch(api)
            .then(response => {
                debugger
                return response
            })
            .catch(error => console.error(error))
    }
}

export default cosmeticsStoreService;
