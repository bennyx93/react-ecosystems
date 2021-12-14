import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markAsCompleteTodo } from './actions';
import './TodoList.css';

const TodoList = ( {todos = [], onRemovePressed, onCompletePressed} ) => {
    return (
        <div className="list-wrapper">
            <NewTodoForm />
            { todos.map( (todo => <TodoListItem key={todo.id} todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />) ) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemovePressed: text => dispatch(removeTodo(text)),
        onCompletePressed: text => dispatch(markAsCompleteTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);