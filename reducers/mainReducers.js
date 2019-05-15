import { combineReducers } from "redux";

function list(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
    }, action) {
    switch (action.type) {
        case REQUEST_LIST:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVED_LIST:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true,
                items: action.posts,
                lastUpdated: action.receivedAt,
                updateIn: action.updateIn
            })
        default:
            return state
    }
}

function listShow(state={}, action) {
    switch(action.type) {
        case RECEIVED_LIST:
        case REQUEST_LIST:
            return Object.assign({}, state, {
                ["list"]: list(state[action.path], action)
            })
            default:
        return state
    }
}

const mainReducers = combineReducers({
    listShow
});

export default mainReducers;