
export type InitialStateType = typeof initialState

let initialState = {};

const sideBarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}
export default sideBarReducer;