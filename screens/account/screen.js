import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import { connect } from 'react-redux';

import { ScreenHeader } from '../../components/headers';

import { AuthActions } from '../../store/authActions';

class Account extends React.Component {
    static navigationOptions = {
        header: props => <ScreenHeader headerProps={props} title='Account'/>
    };

    constructor() {
        super();

        this.state = ({
            firstName: '',
            lastName: '',
            email: '',
            registrationDate: ''
        });
    }

    componentWillMount() {
        AuthActions.getUserData().then(resp => {
            this.setState(
                {
                    ...resp,
                    registrationDate: moment(resp.registrationDate).format('MMMM Do YYYY')
                }
            );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Account Screen</Text>
                <Text>Email: </Text>
                <Text>{this.state.email}</Text>

                <Text>First Name: </Text>
                <Text>{this.state.firstName}</Text>

                <Text>Last Name: </Text>
                <Text>{this.state.lastName}</Text>

                <Text>Registration Date: </Text>
                <Text>{this.state.registrationDate}</Text>
            </View>
        );
    }
}

export default connect(state => {
    return {
        tkn: state.authReducer.tkn
    }
})(Account);