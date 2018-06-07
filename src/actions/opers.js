import uuid from "uuid";

export const addRecord = ({
  selected = false,
  name = "",
  math = 0,
  english = 0,
  chinese = 0,
  total = 0
} = {}) => ({
    type: "ADD_RECORD",
    record: {
      id: uuid(),
      selected,
      name,
      math,
      english,
      chinese,
      total
    }
  });

export const removeRecord = id => ({
  type: "REMOVE_RECORD",
  id
});

export const changeSelectedState = id => ({
  type: "CHANGE_SELECTED_STATE",
  id
});

// export const showSelectedRec=()=>({
//   type:"SHOW_SELECTED"
// })

// export const showUnSelectedRec=()=>({
//   type:"SHOW_UNSELECTED"
// })