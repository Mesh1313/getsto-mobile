import React from 'react';
import { createDrawerNavigator, DrawerItems, SafeAreaView  } from 'react-navigation';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet } from 'react-native';
import Routes from './router';
import { connect } from 'react-redux';
import colors from './styles/colors';
import { DefaultLabel } from './components/drawerLabels';
import { AuthActions, AuthActionTypes } from './store/authActions';

const LogoutLink = connect(
    null,
    dispatch => ({
        logout: () => {
            AuthActions.saveTknAsync('').then(() => {
                dispatch({type: AuthActionTypes.LOGOUT_SUCCESS});
            });
        }
    })
)(
    (props) => {
        const onPress = () => {
            AuthActions.logout().then((res) => {
                props.logout();
            });
        }

        return (
            <TouchableOpacity onPress={onPress}>
                <DefaultLabel label="Logout"/>
            </TouchableOpacity>
        )
    }
);

const CustomDrawerContentComponent = (props) => (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <ScrollView>
            <View>
                <Text>Drawer Header</Text>
            </View>
            <View>
                <DrawerItems {...props}/>
                <LogoutLink/>
            </View>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBrown
    }
});

const DrawerNavigation = createDrawerNavigator(
    Routes,
    {
        InitialRoutName: 'Authentication',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            activeBackgroundColor: colors.gray
        }
    }
);

export default DrawerNavigation;