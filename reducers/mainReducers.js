import { combineReducers } from "redux";


const mainReducers = (state = {mList: [], action}) => {
    switch (action.type) {
        case GET_LIST:
            return { ...state, loading: true };
        case GET_LIST_SUCCESS:
            return { ...state, loading: false, mList: action.data };
        case GET_LIST_FAIL:
            return { ...state, loading: false, error: "Error fetching!" }
    }
}

export default combineReducers({
    mainList: mainListReducers
});