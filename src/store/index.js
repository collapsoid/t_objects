import {createStore, combineReducers} from 'redux';
import {targetObjects, currentTargetObjects} from './reducers';

export const store = createStore(combineReducers({targetObjects, currentTargetObjects}));