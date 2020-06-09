import React from 'react';

import { CosmeticsStoreServiceConsumer } from '../cosmetics-store-service-context';

const withCosmeticsStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <CosmeticsStoreServiceConsumer>
                {
                    (cosmeticsStoreService) => {
                        return (
                            <Wrapped
                                {...props}
                                cosmeticsStoreService={cosmeticsStoreService}
                            />
                        );
                    }
                }
            </CosmeticsStoreServiceConsumer>
        );
    }
};

export default withCosmeticsStoreService;
