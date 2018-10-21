import React from 'react';
import { createDrawerNavigator, DrawerItems, SafeAreaView  } from 'react-navigation';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Routes from './router';

const CustomDrawerContentComponent = (props) => (
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View>
            <Text>Drawer Header</Text>
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const DrawerNavigation = createDrawerNavigator(
    Routes,
    {
        InitialRoutName: 'Authentication',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent
    }
);

export default DrawerNavigation;