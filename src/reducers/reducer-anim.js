const defaultState = {
    visible: false; 
}

export const animReducer = (state = defaultState, action) => {
    switch(state, action.type) {
        case 'ANIM_IN':
         return { ...state, visible: true };
        default:
         return state;
    }
};
