import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/reducer';

const stringEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;

    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return originalDispatch({
                type: action
            });
        }

        originalDispatch(action);
    };

    return store;
};

const logEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    const originalDispatch = store.dispatch;

    store.dispatch = (action) => {
        console.log(action.type);

        return originalDispatch(action);
    };

    return store;
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
