const operReducerDefaultState = [];
const operReducer = (state = operReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      return state.concat(action.record);
    case "REMOVE_RECORD":
      return state.filter(record => action.id !== record.id);
    default:
      return state;
  }
};

export default operReducer;
