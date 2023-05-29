import axios from 'axios'
import { setPosts, setPostsDetails } from "../reducer/post"
import { toast } from 'react-toastify'

export const GetPosts = () => async (dispatch) => {
    try {
        const responses = await axios.get (
            `${process.env.REACT_APP_POSTS_API}/posts`
        )
        dispatch(setPosts(responses.data))
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(error?.responses?.data?.mesagge)
            return
        }
        toast.error(error?.mesagge)
    }
}

export const getPostsDetails = (id) => async (dispatch) => {
    try {
        const responses = await axios.get (
            `${process.env.REACT_APP_POSTS_API}/posts/${id}`
        )
        dispatch(setPostsDetails(responses.data))
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(error?.responses?.data?.mesagge)
            return
        }
        toast.error(error?.mesagge)
    }
}