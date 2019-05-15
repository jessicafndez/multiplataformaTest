import React from 'react';
import PropTypes from 'prop-types'; // change this to apply to react new version
import { connect } from 'react-redux';

// actions
import {
    fecthMainList
} from './actions/actionsMain'

import mainReducer from './reducers/mainReducers';

class Main extends React.Component {

    constructor(props) {

    }
}

Main.prototype = {
    store: Prototypes.object.isRequired
}

export default Main;