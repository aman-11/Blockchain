import * as api from '../Api/Api'

export const Signup = (formData, history) => async (dispatch) => {

    const AUTH = "AUTH"
    try {
        const { data } = await api.signup(formData)

        dispatch({ type: AUTH , data})
        history.push('/login');
    } catch (e) {
        console.log(e)
    }
}