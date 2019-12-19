import * as actions from "../actions"

const initialState = {
    friends: [],
    isFetching: false,
    isPosting: false,
    error: ""
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case actions.FETCH_FRIENDS_START:
            return {...state, friends: [], isFetching: true, isPosting: false, error: ""}
        case actions.FETCH_FREINDS_SUCCESS:
            return {...state, friends: action.payload, isFetching: false, isPosting: false, error: ""}
        case actions.FETCH_FREINDS_FAILURE:
            return {...state, friends: [], isFetching: false, isPosting: false, error: action.payload}

        case actions.CREATE_FREIND_START:
            return {...state, friends: [], isFetching: false, isPosting: true, error: ""}
        case actions.CREATE_FREIND_SUCCESS:
            return {...state, friends: action.payload, isFetching: false, isPosting: false, error: ""}
        case actions.CREATE_FREIND_FAILURE:
            return {...state, friends: [], isFetching: false, isPosting: false, error: action.payload}
   
      default:
        return state
    }
}