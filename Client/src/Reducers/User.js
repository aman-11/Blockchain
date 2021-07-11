const AUTH = "AUTH"
export const intialState = null
export const userReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action.data }))
            return { ...state, authData: action.data }
        case "FETCH_ALL":
            return action.payload
        default:
            return state
    }
}