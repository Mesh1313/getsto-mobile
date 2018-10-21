import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './styles';
import globalStyles from '../../styles/styles';

import { connect } from 'react-redux';

import { HomeHeader } from '../../components/headers';

class Home extends React.Component {
    static navigationOptions = {
        header: props => <HomeHeader headerProps={props}/>
    };

    static componentWillMount() {
        // StoActions.getStos();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Text>{this.props.tkn}</Text>
            </View>
        );
    }
}

export default connect(state => {
    return {
        tkn: state.authReducer.tkn
    }
})(Home)