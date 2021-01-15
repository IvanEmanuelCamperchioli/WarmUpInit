import route from '../assets/routes';
import axios from 'axios';

const toPost = async newPost => {
    const res = await axios.post(`${route}/posts`, newPost)
    return res
}

export default toPost;