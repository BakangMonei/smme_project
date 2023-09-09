// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // You'll need to create your reducers

const store = createStore(rootReducer);

export default store;
