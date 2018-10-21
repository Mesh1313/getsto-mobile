import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/store';

import Root from './screens/root';

export default class App extends React.Component {
    constructor() {
        super();
        this.store = configureStore();
    }
    render() {
        return (
            <Provider store={this.store}>
                <Root/>
            </Provider>
        );
    }
}
