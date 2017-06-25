import React from 'react';

class Checkbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            completed: this.props.completed,
        }
    }
    checkIt() {
        if (this.state.completed) {
            this.setState({completed:false})
        } else {
            this.setState({completed:true})
        }
    }
    render(){
        return(
                <button className="checkbox icon" onClick={() => this.checkIt()}>
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

export default Checkbox;