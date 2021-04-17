import {getAuthUserData} from "./authReducer";

const INITIALiZED_SUCCESS = 'my-social-network/app/INITIALiZED_SUCCESS';


let initialState: InitialStateType = {
    initialized: false
}
export type InitialStateType = {
    initialized: boolean
}

const appReducer = (state = initialState, action: any): InitialStateType => {

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
export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALiZED_SUCCESS});

type InitializedSuccessActionType = {
    type: typeof INITIALiZED_SUCCESS
}


export const initializedApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        });
}

export default appReducer;
