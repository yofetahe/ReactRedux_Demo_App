import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopMenu from '../shared/TopMenu';
import Comment from './Comment';

import { FetchCommentsByPostId } from '../../actions';

import './posts.css';

class Comments extends Component {

    componentDidMount(){
        console.log("****", this.props.match.params.id);
        this.props.FetchCommentsByPostId(this.props.match.params.id);
    }

    render(){
        return (
            <div>
                <TopMenu page="POSTS" subpage="COMMENTS" />
                <div className="singlePost">
                    <h4> {this.props.postTitle} </h4>
                    <p> {this.props.postBody} </p>
                </div>
                <h4>COMMENTS</h4>
                {this.props.comments && this.props.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}
            </div>
        );
    };
}

const mapStateToProps = state => {
    console.log(">>>", state.post.title)
    return {
        comments: state.comments,
        postTitle: state.post.title,
        postBody: state.post.body
    }
}

export default connect(mapStateToProps, { FetchCommentsByPostId })(Comments);