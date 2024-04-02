
export default (currentState, action) => {
  switch (action.type) {
    case "FILTRATION":
      return {
        ...currentState,
        dataUserFiltred: currentState.dataUserCompany.filter((item) => {
          let userInfo = [
            ...item.languages,
            ...item.tools,
            item.role,
            item.level,
          ];
          
        return currentState.activeStates.every(activeState => userInfo.includes(activeState));
        }),
      };
    case "CLEAR__ACTIVE__STATES":
      return {
        ...currentState,
        activeStates:[],
        dataUserFiltred:[]
      };
    case "ADD__STATES":
      return {
        ...currentState,
        activeStates: [...currentState.activeStates, action.payload.newState],
      };
    case "CLEAR__STATES":
      return {
        ...currentState,
        activeStates: [],
      };
    case "REMOVE":
      return {
        ...currentState,
        activeStates: currentState.activeStates.filter(
          (item) => item !== action.payload.name
        ),
        dataUserFiltred: currentState.dataUserCompany.filter((item) => {
          const newActiveState = [...currentState.activeStates];
          newActiveState.splice(newActiveState.indexOf(action.payload.name), 1);

          let userInfo = [
            ...item.languages,
            ...item.tools,
            item.role,
            item.level,
          ];
        return newActiveState.every(activeState => userInfo.includes(activeState));
        }),

      };
    default:
      console.log(`The action type${action.type} isn't defined`);
      return currentState;
  }
};
