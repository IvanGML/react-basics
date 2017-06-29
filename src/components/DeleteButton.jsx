import React from 'react';

const DeleteButton = (props) => {
    return(
            <button className={props.title + " icon"} onClick={props.deleteTodo}>
                <i className="material-icons">
                    {props.title}
                </i>
            </button>
    );
}

DeleteButton.propTypes = {
    title: React.PropTypes.string.isRequired,
    deleteTodo: React.PropTypes.func.isRequired,
}
DeleteButton.defaultProps = {
    title: 'delete',
}

export default DeleteButton;