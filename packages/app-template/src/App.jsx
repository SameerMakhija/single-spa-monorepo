import React from 'react';
import PropTypes from 'prop-types';
import Counter from './components/Counter';

const App = ({ store }) => {
    return (
        <div className="app-template" data-testid="app-template">
            <Counter />
        </div>
    );
};

App.propTypes = {
    store: PropTypes.shape({}).isRequired,
};

export default App;
