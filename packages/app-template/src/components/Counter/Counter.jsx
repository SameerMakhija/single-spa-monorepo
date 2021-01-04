import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/actions/counterActions';
import { logCounter } from '../../store/thunks/counterThunks';
import { getCounter, getLogValue } from '../../store/selectors/counterSelector';

const Counter = () => {
    const counter = useSelector(getCounter);
    const logValue = useSelector(getLogValue);
    const delay = 3000;
    const dispatch = useDispatch();

    return (
        <div className="counter" data-testid="counter">
            <h2 className="counter-title" data-testid="counter-title">
                {counter}
            </h2>
            <h3 className="counter-subtitle" data-testid="counter-subtitle">
                {logValue}
            </h3>
            <div className="counter-btn-group">
                <button type="button" onClick={() => dispatch(increment(1))}>
                    Increment Counter
                </button>
                <button type="button" onClick={() => dispatch(decrement(1))}>
                    Decrement Counter
                </button>
                <button
                    type="button"
                    onClick={() => dispatch(logCounter(counter, delay))}
                >
                    Log Counter (3s Delay)
                </button>
            </div>
        </div>
    );
};

export default Counter;
