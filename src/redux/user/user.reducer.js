// we need to set the initial state

const INITIAL_STATE = {
  currentUser: null,
};
// if state is ever undefined it will be set as INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
