import React from 'react';

const Comment = (props) => {
    return (    
        <div style={{ borderBottom: "1px solid #ccc" }}>
            <p> {props.comment.body} </p>
            <h4> Given By: {props.comment.name} | Email: {props.comment.email} </h4>
        </div>        
    );
}

export default Comment