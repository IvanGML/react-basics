import React from 'react';
import DeleteButton from './DeleteButton';



class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.title !== '') {
            this.props.onAdd(this.state.title);
            this.setState({ title: ''});
        } else {
            alert('Fill input area, please.')
        }
    }

    handleClick(e) {
        let title = e.target.value;
        this.setState({ title })
    }

    render(){
        return(
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input
                    type="text" 
                    value={this.state.title} 
                    onChange={this.handleClick} 
                    placeholder="Что нужно сделать?"/>
                <DeleteButton type="submit">Отправить</DeleteButton> 
            </form> 
        );
    };
}

Form.propTypes = {
    onAdd: React.PropTypes.func,
}

export default Form;