const operReducerDefaultState = [];
const operReducer = (state = operReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_RECORD":
      return state.concat(action.record);
    case "REMOVE_RECORD":
      return state.filter(record => action.id !== record.id);
    case "CHANGE_SELECTED_STATE":
      let resultRec = new Array(0), resultLength;
      resultLength = state.length;
      for (let i = 0; i < resultLength; i++) {
        resultRec.push(state[i])
        if (state[i].id === action.id) {
          resultRec[i].selected = !resultRec[i].selected
        }
      }
      // let needRec = state.filter(record => action.id === record.id);
      // let elseRec = state.filter(record => action.id !== record.id);
      // needRec[0].selected = !needRec[0].selected;
      // console.log("needRec:" + JSON.stringify(needRec));
      // console.log("elseRec:" + JSON.stringify(elseRec));
      // if (needRec[0].selected === true) {
      //   console.log("true");
      // } else {
      //   console.log("false");
      // }
      // return elseRec.concat(needRec);
      return resultRec;
    case "SHOW_SELECTED":
      return state.filter(record => record.selected);
    case "SHOW_UNSELECTED":
      return state.filter(record => !record.selected);
    default:
      return state;
  }
};

export default operReducer;
