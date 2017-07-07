import React from 'react';
import DeleteButton from './DeleteButton';



class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.refs.title.value !== '') {
            this.props.onAdd(this.refs.title.value);
            this.refs.title.value = '';
        } else {
            alert('Fill input area, please.')
        }
    }

    render(){
        return(
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" placeholder="Что нужно сделать"/>
                <DeleteButton type="submit">Отправить</DeleteButton> 
            </form> 
        );
    };
}

Form.propTypes = {
    onAdd: React.PropTypes.func,
}

export default Form;