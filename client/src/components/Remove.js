import React, { useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import image from '../images/remove.jpg'
import '../styles/remove.css'

const Remove = props => {

    const alertswal = id => {
        swal({
            title: "¿Eliminar del registro?",
            text: "No podrá recuperar los datos una ves realizada la acción!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
            .then((willDelete) => {
                if (willDelete) {
                    remove(id)
                    swal("Los datos fueron eliminados correctamente", {
                        icon: "success",
                    });

                } else {
                    swal("Sus datos fueron conservados");
                };
                props.history.push("/")
            });
    }

    const remove = async id => {
        const idToRemove = id
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${idToRemove}`)
        props.history.push("/")
    }

    useEffect(() => {
        props.match.params.id !== undefined
        && alertswal(props.match.params.id)
    }, [])

    console.log(props.match.params.id)

    return ( 
        <div className="remove-img" style={{ backgroundImage: `url(${image})` }}> 
        </div>
     );
}
 
export default Remove;