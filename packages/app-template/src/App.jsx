import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Counter from './components/Counter';

const App = ({ store }) => (
    <Provider store={store}>
        <div className="app-template" data-testid="app-template">
            <Counter />
        </div>
    </Provider>
);

App.propTypes = {
    store: PropTypes.shape({}).isRequired,
};

export default App;
