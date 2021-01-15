import React, { useEffect, useState } from 'react';
import CardDetails from '../components/CardDetails';
import image from '../images/post-image.png'
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import getPostDetails from '../services/getById'

const Details = props => {

    const [data, setData] = useState([])
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const [id, setId] = useState(0)

    useEffect( async () => {
        const idPost = props.match.params.id
        const res = await getPostDetails(idPost, props)
        setId(idPost)
        setData(res.data)
    }, [])

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div className="img-details" style={{ backgroundImage: `url(${image})` }}>
            <CardDetails
                data={data}
                id={id}
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
                isOpen={tooltipOpen}
                target="Tooltip"
                toggle={toggle}
            >
                Volver al listado
                </Tooltip>
        </div>
    );
}

export default Details;