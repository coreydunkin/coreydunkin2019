export default (state, action) => {
    switch (action.type) {
        case "animIn":
        return {
            anim: action.payload
        };
        default:
        return state;
    }
};