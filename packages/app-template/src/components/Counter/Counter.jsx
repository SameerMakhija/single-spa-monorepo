import React from 'react';

const Counter = () => {
    return (
        <div className="counter" data-testid="counter">
            <h2 className="counter-title">0</h2>
            <div className="counter-btn-group">
                <button type="button">Increment Counter</button>
                <button type="button">Decrement Counter</button>
            </div>
        </div>
    );
};

export default Counter;
