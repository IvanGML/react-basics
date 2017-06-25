import React from 'react';

function checkIt() {
    if (this.state.completed) {
        this.setState({completed:false})
    } else {
        this.setState({completed:true})
    }
}
class Checkbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            completed: this.props.completed,
        }
    }
    render(){
        return(
                <button className="checkbox icon" onClick={checkIt.bind(this)}>
                    <i className="material-icons">
                        {this.state.completed? 'check_box' : 'check_box_outline_blank'}
                    </i>
                </button>
        );
    }
}

Checkbox.propTypes = {
    completed: React.PropTypes.bool.isRequired,
}
// Checkbox.defaultProps = {
//     completed: false,
// }

export default Checkbox;