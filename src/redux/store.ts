import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Assuming you have your reducers defined

const store = configureStore({
	reducer: rootReducer
});

export default store;