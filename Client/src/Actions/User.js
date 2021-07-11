import * as api from '../Api/Api'

export const Signup = (formData, history) => async (dispatch) => {

    const AUTH = "AUTH"
    try {
        const { data } = await api.signup(formData)

        dispatch({ type: AUTH, data })
        history.push('/login');
    } catch (e) {
        console.log(e)
    }
}

export const login = (formData, history) => async (dispatch) => {

    const AUTH = "AUTH"
    try {

        const { data } = await api.login(formData)
        dispatch({ type: AUTH, data })
        //toast message 
        history.push('/main')
        window.location.reload()

    } catch (e) {
        console.log(e)
    }
}
export const fetchUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchUser(id)
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error)
    }
}