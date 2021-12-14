import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { getTodos, getTodosLoading, getIncompleteTodos, getCompletedTodos } from './selectors'
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';

import './TodoList.css';

const TodoList = ( {completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos} ) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            <h3>Incomplete: </h3>
            { incompleteTodos.map( (todo => <TodoListItem key={todo.id} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />) ) }
            <h3>Completed:</h3>
            { completedTodos.map( (todo => <TodoListItem key={todo.id} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />) ) }
        </div>
    );
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = (state) => {
    return {
        isLoading: getTodosLoading(state),
        completedTodos: getCompletedTodos(state),
        incompleteTodos: getIncompleteTodos(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLoadingTodos: () => dispatch(loadTodos()),
        onRemovePressed: id => dispatch(removeTodoRequest(id)),
        onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
        ondDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);