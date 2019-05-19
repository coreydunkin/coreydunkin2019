export default (state, action) => {
    switch (action.type) {
        case "anim":
        return {
            animating: action.payload
        };
        default:
        return state;
    }
};