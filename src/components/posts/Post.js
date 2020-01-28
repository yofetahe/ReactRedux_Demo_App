import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ViewListIcon from '@material-ui/icons/ViewList';

import { FetchWritter } from '../../actions';

import './posts.css'

class Post extends Component {

    componentDidMount(){
        this.props.FetchWritter(this.props.post.userId);
    }
    
    render(){        
        return (
            <div className="postContent">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <Link to={`/posts/${this.props.post.id}/comments`} style={{textDecoration: "none"}}>
                    <ViewListIcon /> Comments
                </Link>
                {/* <p>{this.props.writtenBy}</p> */}
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        writtenBy: state.writtenBy
    };
}

export default connect(mapStateToProps, { FetchWritter })(Post);