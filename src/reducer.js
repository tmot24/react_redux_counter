const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return ++state;
        case "DEC":
            return --state;
        case "RST":
            return state + action.value;
        default:
            return state;
    }
};

export default reducer;