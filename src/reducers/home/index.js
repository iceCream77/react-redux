import { combineReducers } from 'redux';
import waitthing from './waitThing';
import datalist from './dataList';

const home = combineReducers({
    waitthing,
    datalist
});
export default home;
