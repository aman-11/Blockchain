export default (stories = [], action) => {       //action:typr  and data=>post intially it is empty[]
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload
        case "STORE_ALL":
            return action.payload
        default:
            return stories
    }
}