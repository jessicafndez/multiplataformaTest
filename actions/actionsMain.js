import fetch from 'isomorphic-fetch'

export const REQUEST_LIST = 'REQUEST_LIST';
function requestList() {
    return {
        type: REQUEST_LIST
    }
}

export const RECEIVED_LIST = 'RECEIVE_LIST';
function receiveList(json)  {
    return {
        type: RECEIVE_LIST,
        mainList: json.data.children.map(child => child.data),
        receivedAt: Date.now(),
        updateIn: 1000*60*5,
    }
}


export function fecthMainList() {
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}