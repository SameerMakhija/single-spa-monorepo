import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSettingsAppName } from "../store/selectors/settingsSelector";
import { resetAppName, updateAppName } from "../store/actions/settingsActions";

export default function Navbar() {
  const name = useSelector(getSettingsAppName);
  const dispatch = useDispatch();

  return (
    <div>
      <span>App Name: {name}</span>
      <button onClick={() => dispatch(resetAppName())}>Reset App Name</button>
      <button
        onClick={() =>
          dispatch(updateAppName(`Updated: ${new Date().getTime()}`))
        }
      >
        Update App Name
      </button>
    </div>
  );
}
