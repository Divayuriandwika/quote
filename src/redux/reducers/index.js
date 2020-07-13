import { combineReducers } from 'redux';
import items from './quoteReducer'


const allReducers = combineReducers({
    allItems : items,
});

export default allReducers;