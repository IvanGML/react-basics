import React from 'react';

const Checkbox = props => {

    // checkIt() {
    //     if (this.state.completed) {
    //         this.setState({completed:false})
    //     } else {
    //         this.setState({completed:true})
    //     }
    // }
    // render(){
        return(
                <button className="checkbox icon">
                    <i className="material-icons">
                        {props.completed? 'check_box' : 'check_box_outline_blank'}
                    </i>
                </button>
        );
    // }
}

Checkbox.propTypes = {
    completed: React.PropTypes.bool.isRequired,
}

export default Checkbox;