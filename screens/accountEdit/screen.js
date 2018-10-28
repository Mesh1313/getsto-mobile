import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import globalStyles from '../../styles/styles';
import { connect } from 'react-redux';
import { ScreenHeader } from '../../components/headers';
import { AccountActions, AccountActionTypes } from '../../store/accountActions';
import utils from '../../utils';
import { Form } from 'native-base';
import elements from '../../components/elements';

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
        this.onSave = this.onSave.bind(this);

        const {accountData} = props;

        this.state = ({
            ...accountData
        });
    }

    onSave() {
        AccountActions.save(this.state).then(res => {
            this.props.onSaveSuccess(this.state);
            utils.navigateBack(this.props.navigation);
        })
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <Form>
                    <elements.TextInput
                        label="Имя"
                        value={this.state.firstName}
                        onChangeText={(text) => { this.setState({firstName: text}) }}
                    />
                    <elements.TextInput
                        label="Фамилия"
                        value={this.state.lastName}
                        onChangeText={(text) => { this.setState({lastName: text}) }}
                    />
                    <elements.TextInput
                        label="Телефон"
                        value={this.state.phone}
                        onChangeText={(text) => { this.setState({phone: text}) }}
                    />
                    <View>
                        <elements.GrayButton
                            text="Сохранить"
                            onPress={this.onSave}
                        />
                    </View>
                </Form>
            </View>
        );
    }
}

export default connect(
    state => ({
        accountData: state.accountReducer.accountData
    }),
    dispatch => ({
        onSaveSuccess: (data) => {
            dispatch({type: AccountActionTypes.SAVE_SUCCESS, payload: data});
        }
    })
)(AccountEdit);