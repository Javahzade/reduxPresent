/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App.js';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './app/redux/store.js';

const AppContainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
