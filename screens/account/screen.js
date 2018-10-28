import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import globalStyles from '../../styles/styles';
import moment from 'moment';
import { connect } from 'react-redux';
import { ScreenHeader } from '../../components/headers';
import { AuthActions } from '../../store/authActions';
import colors from '../../styles/colors';
import utils from '../../utils';

const RightElem = (props) => {
    const onPress = () => {
        props.navigation.navigate('AccountEdit', {...utils.extractCurrentRouteParams(props.navigation.state)});
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.rightElemText}>Edit</Text>
        </TouchableOpacity>
    );
}

class Account extends React.Component {
    static navigationOptions = {
        header: props => {
            return <ScreenHeader headerProps={props} title='Account' rightElem={<RightElem {...props}/>}/>
        }
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
            this.props.navigation.setParams({
                firstName: resp.firstName,
                lastName: resp.lastName,
                email: resp.email
            })
        });
    }

    render() {
        return (
            <View style={globalStyles.container}>
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
    return {}
})(Account);

const styles = StyleSheet.create({
    rightElemText: {
        ...globalStyles.defaultFont,
        color: colors.lightGreen
    }
});