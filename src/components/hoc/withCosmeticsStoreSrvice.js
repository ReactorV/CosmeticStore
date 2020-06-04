import { CosmeticsStoreServiceConsumer } from '../cosmetics-store-service-context';

const withCosmeticsStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <CosmeticsStoreServiceConsumer>
                {
                    (CosmeticsStoreService) => {
                        return (
                            <Wrapped
                                props={...props}
                                cosmeticsStoreService={CosmeticsStoreService}
                            />
                        );
                    }
                }
            </CosmeticsStoreServiceConsumer>
        );
    }
};

export default withCosmeticsStoreService;
