import React from 'react';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CachedIcon from '@material-ui/icons/Cached';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { green, red } from '@material-ui/core/colors';

import './todos.css';

const completed = {
    backgroundColor: "rgba(0, 128, 0, 0.1)"
}

const notcompleted = {
    backgroundColor: "rgba(255, 0, 0, 0.1)"
}

const ToDo = (props) => {
    return (
        <div className="todos" style={props.todo.completed ? completed : notcompleted }>
            <p>
                <span className="TodoStatus" >
                    {props.todo.completed && <CheckCircleIcon style={{ color: green[500] }} /> }  
                    {!props.todo.completed && <CachedIcon style={{ color: red[500] }} />} 
                </span>
                {props.todo.title}
                {!props.todo.completed && 
                    <span style={{float: "right"}}>
                        <span style={{cursor: "pointer"}} onClick={()=> props.handleToDoDone(props.todo)}>
                            <CheckCircleIcon style={{ color: green[500] }} />
                        </span>
                        <span style={{cursor: "pointer"}} onClick={()=> props.handleToDoDelete(props.todo)}>
                            <HighlightOffIcon style={{ color: red[500] }} />
                        </span>
                    </span>
                }
            </p>
        </div>
    );
}

export default ToDo