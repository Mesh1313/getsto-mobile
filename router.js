import { createStackNavigator } from 'react-navigation';

// routes
import HomeScreen from './screens/home/screen';
import AccountScreen from './screens/account/screen';

export default Router = {
    Home: {
        screen: createStackNavigator({
            screen: HomeScreen
        })
    },
    Account: {
        screen: createStackNavigator({
            screen: AccountScreen
        })
    }
};