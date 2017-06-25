import React from 'react';

import Checkbox from './Checkbox'
import DeleteButton from './DeleteButton'

const Todo = (props) => {
    return(
        <div className={`todo${props.completed ? ' completed' : ''}`}>
            <Checkbox completed={props.completed} />
            <span className="todo-title">{props.todo}</span>
            <DeleteButton title="delete" />
        </div>
    );
}

Todo.propTypes = {
    todo: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
}


export default Todo;