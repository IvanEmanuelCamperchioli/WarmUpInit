import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Spinner
} from 'reactstrap';
import '../styles/details.css';


const CardDetails = props => {

    return ( 

        <div className="div-card">
            <Card>
                <CardBody>
                    {props.data.length === 0
                        ? <Spinner color="info" />
                        : 
                            <>
                                <div className="div-card-details">
                                    <CardTitle tag="h5" className="card-title" >{props.data.title}</CardTitle>
                                    <hr style={{ width: '100%' }}/>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Id: {props.data['id']}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">User id: {props.data.userId}</CardSubtitle>
                                    <CardText>{props.data.body}</CardText>
                                </div>
                                <hr style={{ width: '100%' }}/>
                                <div className="div-card-buttons">
                                    <NavLink to={`/edit/${props.id}/${props.title}/${props.body}`}><Button>Editar</Button></NavLink>
                                </div>
                            </>
                    }
                </CardBody>
            </Card>
      </div>
    );
};
 
export default CardDetails;