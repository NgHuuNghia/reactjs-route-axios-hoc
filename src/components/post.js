import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {

    state = {
        posts: null
    }
    
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts'
            , {
                params: {
                    id: id
                }
            }
        )
            .then(res => {
                this.setState({
                    posts: res.data[0]
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const post = this.state.posts ? (
            <div className="post card" key={this.state.posts.id}>
                <div className="card-content">
                    <span className="card-title"> {this.state.posts.id} - {this.state.posts.title}</span>
                    <p>{this.state.posts.body}</p>
                </div>
            </div>
        ) : (
                <div className="center"> NOT FOUND PAGE ... </div>
            )

        return (
            <div className="container">
                {post}
            </div>
        )
    }

}

export default Post;