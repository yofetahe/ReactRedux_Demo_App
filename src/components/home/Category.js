import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

import AssignmentIcon from '@material-ui/icons/Assignment';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PeopleIcon from '@material-ui/icons/People';

const style = {
    fontSize: "50px"
}

const Category = (props) => {
    return (
        <div className="category"> 
            <Link to={`/${props.category}`} className="categoryText"> 
                {props.category === "posts" && <AssignmentIcon style={style}/> }
                {props.category === "albums" && <PhotoAlbumIcon style={style}/> }
                {props.category === "todos" && <FormatListNumberedIcon style={style}/> }
                {props.category === "users" && <PeopleIcon style={style}/> }
                <br/>
                {props.category} 
            </Link>
        </div>
    );
}

export default Category;