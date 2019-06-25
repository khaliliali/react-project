import _posts from '../data/posts';
import { combineReducers } from 'redux';

function comments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            if (!state[action.postId]) {
                return { ...state, [action.postId]: [action.comment] };
                //  this is not array/ it's just es6 property that let us these properties works as an object
            } else {
                return {
                    ...state,
                    [action.postId]: [...state[action.postId], action.comment]
                };
            }
        default:
            return state;
    }
}

function posts(state = _posts, action) {
    console.log(action.index);
    // remove photo action

    switch (action.type) {
        case 'REMOVE_POST':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case 'ADD_POST':
            return [...state, action.post];
        default:
            return state;
    }
}

const rootReducers = combineReducers({ posts, comments });

export default rootReducers;
