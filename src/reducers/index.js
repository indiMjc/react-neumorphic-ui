import { combineReducers } from 'redux';
import { tickets } from './tickets';
import { replies } from './replies';
import { projects } from './projects';

const reducer = combineReducers({
	tickets,
	replies,
	projects
});

export default reducer;
