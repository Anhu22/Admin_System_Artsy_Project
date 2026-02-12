import todoReducers from './Reducers';
import userReducer from './UserReducer';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
	todoReducers,
	userReducer
})

export default rootReducers;
