import React from 'react';

const DeleteButton = (props) => {
    return(
            <button className={props.title + " icon"}>
                <i className="material-icons">
                    {props.title}
                </i>
            </button>
    );
}

DeleteButton.propTypes = {
    title: React.PropTypes.string.isRequired,
}
DeleteButton.defaultProps = {
    title: 'delete',
}

export default DeleteButton;