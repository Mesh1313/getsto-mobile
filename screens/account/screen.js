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
import { AccountActions } from '../../store/accountActions';
import colors from '../../styles/colors';
import utils from '../../utils';

const RightElem = (props) => {
    const onPress = () => {
        props.navigation.navigate('AccountEdit');
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

    constructor(props) {
        super();
    }

    componentWillMount() {
        this.props.dispatch(AccountActions.getUserData());
    }

    render() {
        const {accountData} = this.props;

        return accountData ? (
            <View style={globalStyles.container}>
                <Text>Имя: </Text>
                <Text>{accountData.firstName}</Text>

                <Text>Фамилия: </Text>
                <Text>{accountData.lastName}</Text>

                <Text>Email: </Text>
                <Text>{accountData.email}</Text>

                <Text>Телефон: </Text>
                <Text>{accountData.phone}</Text>

                <Text>Registration Date: </Text>
                <Text>{moment(accountData.registrationDate).format('MMMM Do YYYY')}</Text>
            </View>
        ) : (
            <View>
                <Text style={globalStyles.centeredHeader}>Загрузка...</Text>
            </View>
        );
    }
}

export default connect(state => {
    return {
        accountData: state.accountReducer.accountData
    }
})(Account);

const styles = StyleSheet.create({
    rightElemText: {
        ...globalStyles.defaultFont,
        color: colors.lightGreen
    }
});