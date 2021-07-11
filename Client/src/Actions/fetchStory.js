import * as api from '../Api/adminApi'

export const fetchStory = () => async (dispatch) => {
    try {
        const { data } = await api.fetchstory()
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error)
    }
}