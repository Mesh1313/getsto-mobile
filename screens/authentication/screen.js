import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
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
        AuthActions.login(this.state)
            .then(res => {
                this.props.onLoginSuccess(res.token);
                AuthActions.saveTknAsync(res.token);
            })
            .catch(err => {
                console.log('Error while register: ', err);
            });
    }
    toggleAuthMethod () {
        this.setState({isSignUp: !this.state.isSignUp});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    {this.state.isSignUp ?
                        <Text style={styles.headerText}>Создать аккаунт</Text> :
                        <Text style={styles.headerText}>Войти</Text>
                    }
                </View>
                <Container style={globalStyles.container}>
                    <Form>
                        <Item stackedLabel style={styles.inputHolder}>
                            <Label style={styles.label}>Имеил</Label>
                            <Input
                                style={styles.input}
                                autoCorrect={false}
                                value={this.state.email}
                                onChangeText={(text) => { this.setState({email: text}) }}
                            />
                        </Item>
                        <Item stackedLabel style={styles.inputHolder}>
                            <Label style={styles.label}>Пароль</Label>
                            <Input
                                style={styles.input}
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={(text) => { this.setState({password: text}) }}
                            />
                        </Item>
                        <View>
                            <Button block
                                    style={{marginTop: 20, backgroundColor: colors.gray}}
                                    onPress={this.state.isSignUp ? this.onRegister : this.onLogin}>
                                <Text style={{color: colors.white}}>{this.state.isSignUp ? "Создать аккаунт" : "Войти"}</Text>
                            </Button>
                            <View 
                                style={{
                                    alignItems: "center",
                                    paddingTop: 15
                                }}
                            >
                                <TouchableOpacity onPress={this.toggleAuthMethod}>
                                    <Text style={globalStyles.defaultFont}>{this.state.isSignUp ? "Войти" : "Создать аккаунт" }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Form>
                </Container>
            </View>
        );
    }
}

export default connect(null, dispatch => ({
    onRegisterSuccess: (tkn) => {
        dispatch({type: AuthActionTypes.REGISTRATION_SUCCESS, payload: tkn});
    },
    onLoginSuccess: (tkn) => {
        dispatch({type: AuthActionTypes.LOGIN_SUCCESS, payload: tkn});
    }
}))(Authentication);

const styles = StyleSheet.create({
    container: {
        paddingTop: globalStyles.statusBarHeight,
        flex: 1
    },
    header: {
        backgroundColor: colors.darkGreen,
        padding: 15
    },
    headerText: {
        ...globalStyles.centeredHeader,
        color: colors.lightGreen
    },
    inputHolder: {
        borderColor: colors.darkBrown,
        marginLeft: 0
    },
    input: {
        ...globalStyles.defaultFont
    },
    label: {
        ...globalStyles.defaultFont
    }
});