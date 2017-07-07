import React from 'react';

const DeleteButton = (props) => {
    return(
            <button className={props.className} onClick={props.deleteTodo} {...props}>
                {
                    props.icon ?
                        <i className="material-icons">
                            {props.icon}
                        </i>
                        :
                        props.children
                }
            </button>
    );
}

DeleteButton.propTypes = {
    icon: React.PropTypes.string,
    title: React.PropTypes.string,
    deleteTodo: React.PropTypes.func,
    children: React.PropTypes.node,
}


export default DeleteButton;