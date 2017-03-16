import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const load = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};

load(App);
process.env.NODE_ENV !== 'production' && module.hot && module.hot.accept('./components/App', () => load(App));
