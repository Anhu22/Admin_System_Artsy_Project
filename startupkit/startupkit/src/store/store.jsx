import { applyMiddleware, combineReducers, compose, createStore, } from 'redux';
import PostsReducer from './reducers/PostsReducer';
import { thunk } from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
import todoReducers from './reducers/Reducers';
import userReducer from './reducers/UserReducer';
const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    posts: PostsReducer,
    auth: AuthReducer,
    todoReducers,
    userReducer,
});


export const store = createStore(reducers, composeEnhancers(middleware));
