/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from "react";
import StatesReducer from "../reducer/StatesReducer";
const initialState = {
  activeStates: [],
  openActiveStates: false
};

const StateContext = createContext(initialState);

const ProviderStates = ({ children }) => {
  const [state, dispatch] = useReducer(StatesReducer, initialState);

  const handelShowActiveStates = () => {
    dispatch({type:"SHOW__ACTIVE__STATES"});
  }
  const handelHideActiveStates = () => {
    dispatch({type:"HIDE__ACTIVE__STATES"})
  }

  return (
    <StateContext.Provider
      value={{
        activeStates: state.activeStates,
        openActiveStates: state.openActiveStates,
        handelShowActiveStates,
        handelHideActiveStates,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useActiveState = () => {
  return useContext(StateContext);
};

export default ProviderStates;
