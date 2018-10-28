import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { DefaultLabel } from './components/drawerLabels';

// routes
import HomeScreen from './screens/home/screen';
import AccountScreen from './screens/account/screen';
import AccountEditScreen from './screens/accountEdit/screen';

const accountStackRoutes = {
    Account: {
        screen: AccountScreen
    },
    AccountEdit: {
        screen: AccountEditScreen
    }
}
const accountStackConfig = {
    initialRouteName: 'Account'
}

export default Router = {
    Home: {
        screen: createStackNavigator({
            screen: HomeScreen
        }),
        navigationOptions: ({navigation}) => ({
            drawerLabel: <DefaultLabel label="Home"/>
        })
    },
    Account: {
        screen: createStackNavigator(accountStackRoutes, accountStackConfig),
        navigationOptions: ({navigation}) => ({
            drawerLabel: <DefaultLabel label="Account"/>
        })
    }
};