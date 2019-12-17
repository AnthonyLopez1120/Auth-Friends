import { axiosWithAuth } from "../utils/axiosWithAuth"


export const FETCH_FRIENDS_START = "FETCH_FREINDS_START"
export const FETCH_FREINDS_SUCCESS = "FETCH_FREINDS_SUCCESS"
export const FETCH_FREINDS_FAILURE = "FETCH_FREINDS_FAILURE"
export const CREATE_FREIND_START = "CREATE_FREIND_START"
export const CREATE_FREIND_SUCCESS = "CREATE_FREIND_SUCCESS"
export const CREATE_FREIND_FAILURE = "CREATE_FREIND_FAILURE"

export const getFriends = () => dispatch => {
    dispatch ({ type: FETCH_FRIENDS_START })

    axiosWithAuth()
    .get("/api/friends")
    .then(res=>{
        console.log(res)
        dispatch({ type: FETCH_FREINDS_SUCCESS })

    })
    .catch(error => {
        console.log(error.message)
        dispatch({ type: FETCH_FREINDS_FAILURE, payload: error })
    })
}

export const createFriend = friend => dispatch => {
    dispatch ({ type: CREATE_FREIND_START })
    axiosWithAuth()
    .post("/api/friends", friend)
    .then(res => {
        console.log(res)
        dispatch({ type: CREATE_FREIND_SUCCESS, payload: res.data })
    })
    .catch(error => {
        console.log(error.message)
        dispatch ({ type: CREATE_FREIND_FAILURE })
    })
}