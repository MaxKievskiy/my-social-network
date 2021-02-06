const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Mark',
            status: 'Hello everybody',
            location: {city: 'Kaliningrad', country: 'Russia'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Max',
            status: 'Yo',
            location: {city: 'Raanana', country: 'Israel'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Julia',
            status: 'I am the best',
            location: {city: 'New-York', country: 'USA'}
        }

    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUserAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
