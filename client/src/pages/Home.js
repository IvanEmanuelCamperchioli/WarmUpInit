import axios from 'axios';
import React from 'react';
import List from '../components/List';
import { ListGroup } from 'reactstrap';
import '../styles/home.css'
import FormCreateNewPost from '../components/FormCreateNewPost';

class Home extends React.Component {

    state = { 
        posts: []
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({ posts: response.data })
    }

    render() { 

        return ( 
            <>
            <div className="div-sup-home">
                <FormCreateNewPost getPosts={this.getPosts} className="form-NewPost" />
            </div>
            <ListGroup className="list">
                {   this.state.posts.length === 0
                    ? <p>Cargando posts...</p>
                    : <List posts={this.state.posts} />
                }
            </ListGroup>
            </>
         );
    }
}
 
export default Home;