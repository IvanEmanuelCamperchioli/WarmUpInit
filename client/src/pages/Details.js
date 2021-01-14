import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import CardDetails from '../components/CardDetails';
import image from '../images/post-image.png'
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

class Details extends React.Component {

    state = {
        data: [],
        tooltipOpen: false,
        id: 0
    }

    componentDidMount() {
        const idPost = this.props.match.params.id
        this.getPostDetails(idPost)
        this.setState({ id: idPost })
    }

    getPostDetails = async id => {
        await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => {
            if(res.status === 200) {
                const data = res.data
                this.setState({ data })
            }
        })
        .catch( err => {
            swal({
                title: "Ocurrió un error al intentar mostrar los detalles",
                icon: "error",
                button: "Entendido",
            });
            err && this.props.history.push("/")
        })
    }

    getData = data => {
        this.setState({ data: data })
    }

    toggle = () => this.setState({ tooltipOpen: !this.state.tooltipOpen });

    render() {

        return ( 
            <div className="img-details" style={{ backgroundImage: `url(${image})`}}>
                <CardDetails 
                    data={this.state.data} 
                    id={this.state.id} 
                />
                <NavLink to="/">
                    <FontAwesomeIcon 
                        id="Tooltip" 
                        className="iconArrow" 
                        icon={faArrowAltCircleLeft} 
                    />
                </NavLink>
                <Tooltip 
                    placement="bottom" 
                    isOpen={this.state.tooltipOpen} 
                    target="Tooltip" 
                    toggle={this.toggle}
                >
                    Volver al listado
                </Tooltip>
            </div>
         );
    }
}
 
export default Details;