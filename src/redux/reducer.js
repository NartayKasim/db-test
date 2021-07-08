const initialState = {
    id: '',
    email: ''
}

const LOGOUT_USER = 'LOGOUT_USER';
const UPDATE_USER = 'UPDATE_USER'

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}

export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_USER:
            return { ...state, id: payload.id, email: payload.user }
        case LOGOUT_USER:
            return { ...state, id: '', email: '' }
        default:
            return state
    }
}