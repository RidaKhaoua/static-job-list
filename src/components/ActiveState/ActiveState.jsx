/* eslint-disable react/prop-types */

import "./ActiveState.css";

import { useActiveState } from "../../context/Statescontext";
import { useDataUserContext } from "../../context/dataContext";

function ActiveState() {
  const {
    openActiveStates,
    handelHideActiveStates,
  } = useActiveState();
  const {handelClear, activeStates, handelClearActiveStates, handelFillter, handelRemoveTag } = useDataUserContext();
  const displayActiveState = activeStates.map((item) => {
    return (
      <div className="active-state__tag" key={item}>
        <span>{item}</span>
        <button onClick={() => {
          handelFillter(item);
          handelRemoveTag(item);
        }}>X</button>
      </div>
    );
  });


  return (
    <div  className={`active-state ${openActiveStates ? "show" : ""}`}>
      <div className="active-state__tags">{displayActiveState}</div>
      <div className="active-state__clear">
        <button
          onClick={() => {
            handelHideActiveStates();
            // handelClear();
            setTimeout(() => {
              handelClearActiveStates();
            }, 500);
          }}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default ActiveState;
