import fetch from 'isomorphic-fetch';

export const REQUEST_LIST = 'REQUEST_LIST';
function requestList() {
    return {
        type: REQUEST_LIST
    }
}

export const RECEIVE_LIST = 'RECEIVE_LIST';
function receiveList(json)  {
    return {
        type: RECEIVE_LIST,
        mainList: json.data.children.map(child => child.data),
        receivedAt: Date.now(),
        updateIn: 1000*60*5,
    }
}


export function fecthMainList() {
    return dispatch => {
        dispatch(requestList())
        return fetch(`https://swapi.co/api/people`)
            .then(response => response.json())
            .then(json => dispatch(receiveList(json)))
    }
}