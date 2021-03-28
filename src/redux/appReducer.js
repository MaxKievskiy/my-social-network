import {getAuthUserData} from "./authReducer";

const INITIALiZED_SUCCESS = 'INITIALiZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALiZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}
export const initializedSuccess = () => ({type: INITIALiZED_SUCCESS});

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    });
}

export default appReducer;
