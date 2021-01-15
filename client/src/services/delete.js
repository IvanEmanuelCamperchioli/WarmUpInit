import route from '../assets/routes';
import axios from 'axios';

const remove = async (id, props) => {
    const idToRemove = id
    await axios.delete(`${route}/posts/${idToRemove}`)
    props.history.push("/")
};

export default remove;