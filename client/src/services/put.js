import route from '../assets/routes';
import axios from 'axios';

const editPost = async (id, title, body) => {
    const res = await axios.put(`${route}/posts/${id}`, { title, body })
    return res
}

export default editPost;