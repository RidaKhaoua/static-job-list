/* eslint-disable react/prop-types */
import { useContext, createContext, useReducer } from "react";
import data from "../../data.json";
import DataReducer from "../reducer/DataReducer";
const initialState = {
    dataUserCompany: data,
    dataUserFiltred:[],
    activeStates: []
}

const DataContext = createContext(initialState);

const ProviderData = ({children}) => {

    const handelFillter = (tagName) => {
        dispatch({ type: "FILTRATION", payload: { name: tagName } });
      };
    
      const handelClear = (tagName) => {
        dispatch({type:"CLEAR", payload:{name:tagName}})
      }

      const handelAddState = (newState) => {
        dispatch({ type: "ADD__STATES", payload: { newState } });
      };
    
      const handelClearActiveStates = () => {
        dispatch({type:"CLEAR__ACTIVE__STATES"})
      }

      const handelRemoveTag = (tagName) => {
        dispatch({type:"REMOVE", payload:{name:tagName}})
      }

    const [state, dispatch] = useReducer(DataReducer, initialState);
   return <DataContext.Provider value={{
        dataUserCompany: state.dataUserCompany,
        dataUserFiltred: state.dataUserFiltred,
        activeStates: state.activeStates,
        handelFillter,
        handelClear,
        handelAddState,
        handelClearActiveStates,
        handelRemoveTag
    }}>
        {children}
    </DataContext.Provider>
}

export const useDataUserContext = () => {
    return useContext(DataContext);
}

export default ProviderData