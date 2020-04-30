const initialState = {
    posts: [],
    coments: [],
    open: false,
    variant: '',
    msg: ''
}


const posts = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return { ...state, posts: action.payload.posts }
        case "SET_ALL_POSTS_DETAILS":
            return {...state, posts: action.payload.comments}
        case "SET_SNACKBAR_OPEN":
            return { ...state, open: true, msg: action.payload.msg, variant: action.payload.variant }
        case "SET_SNACKBAR_CLOSE":
            return { ...state, open: false }
        default:
            return state;
    }


}

export default posts 