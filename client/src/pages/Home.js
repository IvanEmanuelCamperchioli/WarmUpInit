import React, { useEffect, useState } from 'react';
import List from '../components/List';
import { ListGroup } from 'reactstrap';
import FormCreateNewPost from '../components/FormCreateNewPost';
import getPosts from '../services/get';

const Home = () => {

    const[posts, setPosts] = useState([])

    useEffect( () => {
        async function fetchData() {
            const res = await getPosts()
            setPosts(res.data)    
        }
        fetchData()
    }, []);


    return ( 
            <>
                <div className="div-sup-home">
                    <FormCreateNewPost getPosts={getPosts} className="form-NewPost" />
                </div>
                <ListGroup className="list">
                    {   posts.length === 0
                        ? <h4 style={{ textAlign: 'center' }}>Cargando posts...</h4>
                        : <List posts={posts} />
                    }
                </ListGroup>
            </>
     );
};
 
export default Home;