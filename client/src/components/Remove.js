import React, { useEffect } from 'react';
import swal from 'sweetalert';
import image from '../images/remove.jpg'
import remove from '../services/delete'
import '../styles/remove.css'

const Remove = props => {

    useEffect(() => {
        props.match.params.id !== undefined
        && alertswal(props.match.params.id)
    })

    const alertswal = id => {
        swal({
            title: "¿Eliminar el post?",
            text: "No podrá recuperarlo una ves realizada la acción!",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
            .then((willDelete) => {
                if (willDelete) {
                    remove(id, props)
                    swal("El post fue eliminado correctamente", {
                        icon: "success",
                    });

                } else {
                    swal("El post fue conservado");
                };
                props.history.push("/")
            });
    }

    return (
        <div className="remove-img" style={{ backgroundImage: `url(${image})` }}>
        </div>
    );
}

export default Remove;