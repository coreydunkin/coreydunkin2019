import { AnimFilters } from '../actions/index'

const defaultState = {
    visible: false
}

const animReducer = (state = defaultState, action) => {
    switch(state, action.type) {
        case 'ANIM_IN':
         return { ...state, visible: true };
        case 'ANIM_OUT':
         return {...state, visible: false }; 
        default:
         return state;
    }
};

export default animReducer;