import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FetchToDos, ToDoDone, ToDoDelete } from '../../actions';

import TopMenu from '../shared/TopMenu';
import ToDo from './ToDo';

class ToDos extends Component {

    componentDidMount() {
        this.props.FetchToDos();
    }

    handleToDoDone = (todo) => {
        this.props.ToDoDone(todo, this.props.todos);
    }
    handleToDoDelete = (todo) => {
        this.props.ToDoDelete(todo, this.props.todos);
    }

    render(){
        return (
            <div>
                <TopMenu page="TODO's" />
                {this.props.todos && this.props.todos.map(todo => {
                    return <ToDo key={todo.id} todo={todo} 
                                handleToDoDone={this.handleToDoDone} 
                                handleToDoDelete={this.handleToDoDelete} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.todos)
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps, 
    { FetchToDos, ToDoDone, ToDoDelete }
)(ToDos);