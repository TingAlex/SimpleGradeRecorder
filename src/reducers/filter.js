const filterReducerDefaultState = {};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "IN_FILTERS":
            return {
                filter: "in"
            }
        case "OUT_FILTERS":
            return {
                filter: "out"
            }
        case "NO_FILTERS":
            return {
                filter: "no"
            }
        default:
            return state
    }
}

export default filterReducer;