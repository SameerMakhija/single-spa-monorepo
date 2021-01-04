import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    logCounter,
} from '../../store/actions/counterActions';
import { getCounter } from '../../store/selectors/counterSelector';

const Counter = () => {
    const counter = useSelector(getCounter);
    const dispatch = useDispatch();

    return (
        <div className="counter" data-testid="counter">
            <h2 className="counter-title">{counter}</h2>
            <div className="counter-btn-group">
                <button type="button" onClick={() => dispatch(increment(1))}>
                    Increment Counter
                </button>
                <button type="button" onClick={() => dispatch(decrement(1))}>
                    Decrement Counter
                </button>
                <button
                    type="button"
                    onClick={() => dispatch(logCounter(counter))}
                >
                    Log Counter (3s Delay)
                </button>
            </div>
        </div>
    );
};

export default Counter;
