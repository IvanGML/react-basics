import React from 'react';

const Checkbox = props => {

    // statusChange() {
    //     if (this.state.completed) {
    //         this.setState({completed:false})
    //     } else {
    //         this.setState({completed:true})
    //     }
    // }
    // render(){
        return(
                <button className="checkbox icon" onClick={props.statusChange}>
                    <i className="material-icons">
                        {props.completed? 'check_box' : 'check_box_outline_blank'}
                    </i>
                </button>
        );
    // }
}

Checkbox.propTypes = {
    completed: React.PropTypes.bool.isRequired,
    statusChange: React.PropTypes.func.isRequired,
}

export default Checkbox;