import route from '../assets/routes';
import axios from 'axios';

const getPosts = async () => {
    try {
        const res = await axios.get(`${route}/posts`)
        return res
    } catch (e) {
        return
    };
};

export default getPosts;