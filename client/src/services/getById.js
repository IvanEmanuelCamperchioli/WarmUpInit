import route from '../assets/routes';
import axios from 'axios';
import swal from 'sweetalert';

const getPostDetails = async (id, props) => {
    try {
        const res = await axios.get(`${route}/posts/${id}`)
        return res
    } catch (e) {
        return (
            swal({
                title: "Ocurrió un error al intentar mostrar los detalles",
                icon: "error",
                button: "Entendido",
            })
            + props.history.push("/")
        )
    };
};

export default getPostDetails;