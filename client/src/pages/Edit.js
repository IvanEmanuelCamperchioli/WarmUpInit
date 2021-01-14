import React from 'react';

class Edit extends React.Component {

    // state = { 
    //     id: ''
    // }

    // componentDidMount() {
    //     const idPost = this.props.match.params.id
    //     this.getPostDetails(idPost)
    //     this.setState({ id: idPost })
    // }

    render() { 
        console.log(this.props.match.params.id)

        return ( 
            <>
                <h1>editar el id: </h1>
            </>
         );
    }
}
 
export default Edit;