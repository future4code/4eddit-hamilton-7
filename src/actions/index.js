import axios from 'axios';
import { routes } from '../containers/Router'
import { push } from "connected-react-router"
const token = window.localStorage.getItem("token");

export const setFeed = (posts) => ({
    type: "SET_FEED",
    payload: {
        posts: posts
    }
})   
export const setPostDetail = (post) => ({
    type: "SET_POST_DETAIL",
    payload: {
        post
    }
})
//GET Get Posts
export const fetchPostsAction = () => async dispatch => {
    try {
        const request = await axios.get(
            "https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts",
            {
                headers: {
                    auth: token
                }
            }
        )
        dispatch(setFeed(request.data.posts))
    }
    catch{

    }

}
//POST Login
export const loginAction = (email, password) => async dispatch => {
    const body = {
        
        email:email,
        password:password

    } 
    try {
    const request = await axios.post("https://us-central1-future-apis.cloudfunctions.net/fourEddit/login", 
    body)

    window.localStorage.setItem("token", request.data.token)
    dispatch(push(routes.root))
} catch {
    window.alert("Errou, tente outra vez")
}
//POST Signup
export const signupAction = (username, email, password) => async dispatch => {
    const request = await axios.post(
        "https://us-central1-future-apis.cloudfunctions.net/fourEddit/signup",
        {
            email,
            password,
            username
        }
    )
    dispatch(push(routes.root))
}
//POST Create Post
export const postAction = (title, text) => async dispatch => {
    const request = await axios.post(
        "https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts",
        {
            text,
            title
        },
        {
            headers: {
                auth: token
            }
        }
    )
    dispatch(fetchPostsAction())
}

//GET Get Post Detail
export const fetchPostDetail = (id) => async dispatch => {
    const request = await axios.get(
        `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${id}`, {
            headers: {
                auth: token
            }
        }
    )
    dispatch(setPostDetail(request.data.post))
}
//POST Create Comment
export const postCommentAction = (id, comment) => async dispatch => {
    const request = await axios.post(
        `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${id}/comment`,
        {
            text: comment
        },
        {
            headers: {
                auth: token
            }
        }
    )
    dispatch(fetchPostDetail(id))
}
//PUT Vote
export const voteCommentAction = (postId, commentId, direction) => async dispatch => {
    const request = await axios.put(
        `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`,
        {
            direction
        },
        {
            headers: {
                auth: token
            }
        }
    )
    dispatch(fetchPostDetail(postId))
}
//PUT Vote Comment
export const votePostAction = (postId, direction) => async dispatch => {
    const request = await axios.put(
        `https://us-central1-future-apis.cloudfunctions.net/fourEddit/posts/${postId}/vote`,
        {
            direction
        },
        {
            headers: {
                auth: token
            }
        }
    )
    dispatch(fetchPostDetail(postId))
    dispatch(fetchPostsAction())
}

