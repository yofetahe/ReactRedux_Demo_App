import React from 'react';

import { Link } from 'react-router-dom';

import './menu.css';

const TopMenu = (props) => {
    return (
        <div style={{marginBottom: "25px"}}>
            <Link to="/" className="Link">HOME</Link> / <span className="Inactive">{ props.page }</span>
        </div>
    );
}

export default TopMenu