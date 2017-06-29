import React from 'react';

import Checkbox from './Checkbox'
import DeleteButton from './DeleteButton'

const Todo = props =>
        <div className={`todo${props.completed ? ' completed' : ''}`}>
            <Checkbox completed={props.completed} statusChange={() => props.statusChange(props.id)}/>
            <span className="todo-title">{props.todo}</span>
            <DeleteButton title="delete" deleteTodo={()=>props.deleteTodo(props.id)} />
        </div>;

Todo.propTypes = {
    todo: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    statusChange: React.PropTypes.func.isRequired,
    deleteTodo: React.PropTypes.func.isRequired,
}


export default Todo;