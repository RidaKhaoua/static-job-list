export default (currentState, action) => {
  switch (action.type) {
    
    case "SHOW__ACTIVE__STATES":
      return {
        ...currentState,
        openActiveStates: true,
      };

    case "HIDE__ACTIVE__STATES":
      return {
        ...currentState,
        openActiveStates: false,
      };

  
    case "REMOVE" : 
    return {
      ...currentState,
      activeStates: currentState.activeStates.filter(item => item !== action.payload.name)
    }  
    default:
      console.log("Error type" + action.type + "is not Found it");
      return { ...currentState };
  }
};
