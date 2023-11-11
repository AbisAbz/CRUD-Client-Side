import userReducer from '../Redux/UserSlice'
import {persistStore, persistReducer} from 'redux-persist'
import storage  from 'redux-persist/lib/storage'
import {configureStore} from '@reduxjs/toolkit'

const persistConfig = {
    key:'root',
    storage
};
const persisted = persistReducer(persistConfig,userReducer)

const Store = configureStore({
    reducer: {
        user : persisted,
    },
});

const persistor = persistStore  (Store)
export { Store,persistor}