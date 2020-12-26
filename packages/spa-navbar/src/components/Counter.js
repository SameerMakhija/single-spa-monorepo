import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSettingsCounter } from "../store/selectors/settingsSelector";
import { increment, decrement } from "../store/actions/settingsActions";

const Counter = (props) => {
  const counter = useSelector(getSettingsCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <hgroup>
        <h1>Package Name: {props.name}</h1>
        <h3>Counter: {counter}</h3>
      </hgroup>
      <button onClick={() => dispatch(increment(1))}>Increment Counter</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement Counter</button>
    </div>
  );
};

export default Counter;
