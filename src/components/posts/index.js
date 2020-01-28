import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchPosts } from '../../actions';


import Post from './Post';

import TopMenu from '../shared/TopMenu';

import '../../index.css';

class Posts extends Component {

    componentDidMount() {
        this.props.FetchPosts();
    }

    render(){
        return (
            <div>
                {/* <Menu page="1" />             */}
                <TopMenu page="POSTS" />
                {this.props.posts && this.props.posts.map(post => {
                    return <Post key={post.id} post={post}/>
                })}                
            </div>
        );
    };
}

const mapStateToProps = state => {  
    return {
        posts: state.posts
    };
};

export default connect( 
    mapStateToProps, { FetchPosts }
)(Posts);