import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Logo from "../logo192.png";

class Home extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {

                this.setState({
                    posts: res.data.slice(0, 11)
                })
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {

        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title"> {post.id} - {post.title}</span>
                            </Link>              
                            <p>{post.body}</p> 
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center"> No posts yet</div>
            )

        return (
            <div className="container">
                <h4 className="center">Home </h4>
                <img src={Logo} alt="logo"/>
                {postList}
            </div>

        )
    }

}

export default Home;