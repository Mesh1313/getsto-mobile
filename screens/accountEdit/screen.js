import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import globalStyles from '../../styles/styles';
import { connect } from 'react-redux';
import { ScreenHeader } from '../../components/headers';
import { AuthActions } from '../../store/authActions';
import utils from '../../utils';

const LeftElem = (props) => {
    const onPress = () => {
        utils.navigateBack(props.navigation);
    };

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={globalStyles.headerDefaultMenuText}>Back</Text>
        </TouchableOpacity>
    );
}

class AccountEdit extends React.Component {
    static navigationOptions = {
        header: props => {
            return <ScreenHeader headerProps={props} title='Account Edit' leftElem={<LeftElem {...props}/>}/>
        }
    };

    constructor(props) {
        super();

        const {params} = props.navigation.state;

        this.state = ({
            firstName: params.firstName,
            lastName: params.lastName,
            email: params.email
        });
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <Text>Account Edit</Text>
                <Text>{this.state.email}</Text>
            </View>
        );
    }
}

export default connect(state => {
    return {}
})(AccountEdit);