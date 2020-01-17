import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    return persistReducer(
        {
            key: 'Controle-Clientes',
            storage,
            whitelist: ['auth', 'user'],
        },
        reducers
    );
};
