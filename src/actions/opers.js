import uuid from "uuid";

export const addRecord = ({
  name = "",
  math = 0,
  english = 0,
  chinese = 0,
  total = 0
} = {}) => ({
  type: "ADD_RECORD",
  record: {
    id: uuid(),
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
