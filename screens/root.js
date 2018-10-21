import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';

import Authentication from '../screens/authentication/screen';
import DrawerNavigator from '../navigation';

class Root extends React.Component {
    constructor() {
        super();
    }
    render() {
        if (this.props.isGettingToken) {
            return <View></View>
        } else if (this.props.tkn) {
            return <DrawerNavigator/>;
        } else {
            return <Authentication/>;
        }
    }
}

export default connect(state => {
    return {
        tkn: state.authReducer.tkn,
        isGettingToken: state.authReducer.isGettingToken
    }
})(Root)
