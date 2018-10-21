import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import globalStyles from '../../styles/styles';
import colors from '../../styles/colors';
import { Container, Form, Item, Input, Label, Button } from 'native-base';
import { AuthActions, AuthActionTypes } from '../../store/authActions';

class Authentication extends React.Component {
    constructor() {
        super();
        this.onRegister = this.onRegister.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.toggleAuthMethod = this.toggleAuthMethod.bind(this);
        this.state = {
            email: '',
            password: '',
            isSignUp: true,
        };
    }
    onRegister () {
        AuthActions.register(this.state)
            .then(res => {
                this.props.onRegisterSuccess(res.token);
                AuthActions.saveTknAsync(res.token);
            })
            .catch(err => {
                console.log('Error while register: ', err);
            });
    }
    onLogin () {

    }
    toggleAuthMethod () {
        this.setState({isSignUp: !this.state.isSignUp});
    }

    render() {
        return (
            <Container style={globalStyles.container}>
                <View>
                    {this.state.isSignUp ?
                        <Text style={globalStyles.centeredHeader}>Создать аккаунт</Text> :
                        <Text style={globalStyles.centeredHeader}>Войти</Text>
                    }
                    <Form>
                        <Item stackedLabel>
                            <Label>Имеил</Label>
                            <Input
                                autoCorrect={false}
                                value={this.state.email}
                                onChangeText={(text) => { this.setState({email: text}) }}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Пароль</Label>
                            <Input
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={(text) => { this.setState({password: text}) }}
                            />
                        </Item>
                        <View>
                            <Button block
                                    primary
                                    style={{marginTop: 20}}
                                    onPress={this.state.isSignUp ? this.onRegister : this.onLogin}>
                                {this.state.isSignUp ?
                                    <Text style={{color: colors.white}}>Создать аккаунт</Text> :
                                    <Text style={{color: colors.white}}>Войти</Text>
                                }
                            </Button>
                            <View
                                style={{
                                    alignItems: "center",
                                    paddingTop: 10
                                }}>
                            {this.state.isSignUp ?
                                <Text onPress={this.toggleAuthMethod}>Войти</Text> :
                                <Text onPress={this.toggleAuthMethod}>Создать аккаунт</Text>
                            }
                            </View>
                        </View>
                    </Form>
                </View>
            </Container>
        );
    }
}

export default connect(null, dispatch => ({
    onRegisterSuccess: (tkn) => {
        dispatch({type: AuthActionTypes.REGISTRATION_SUCCESS, payload: tkn});
    }
}))(Authentication)