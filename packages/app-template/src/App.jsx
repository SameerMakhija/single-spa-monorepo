import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

const Counter = React.lazy(() => import('./components/Counter'));

const App = ({ store }) => (
    <Provider store={store}>
        <div className="app-template" data-testid="app-template">
            <Suspense fallback={<div>Loading Counter...</div>}>
                <Counter />
            </Suspense>
        </div>
    </Provider>
);

App.propTypes = {
    store: PropTypes.shape({}).isRequired,
};

export default App;
