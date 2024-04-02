/* eslint-disable react/prop-types */
import { useDataUserContext } from "../../context/dataContext";
import "./Tags.css";

function Tags({ tageName, style, handelAddState, handelShowActiveStates, handelFillter }) {
  const {activeStates} = useDataUserContext();
  if (tageName === "NEW!" || tageName === "FEATURED") {
    return (
      <button className={`tags ${tageName}`} style={style}>
        {tageName}
      </button>
    );
  } else {
    return (
      <button
        className={`tags ${tageName}`}
        style={style}
        onClick={() => {
          if(!activeStates.includes(tageName))
           {
             handelAddState(tageName);
           }
          handelShowActiveStates();
          handelFillter(tageName);
        }}>
        {tageName}
      </button>
    );
  }
}

export default Tags;
