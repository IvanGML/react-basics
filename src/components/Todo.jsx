import React from 'react';

import Checkbox from './Checkbox'
import DeleteButton from './DeleteButton'


class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
        }
        // this.edit = this.edit.bind(this);
        // this.save = this.save.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    ;(e) {
        e.preventDefault();
        let title = this.refs.title.value;
        this.props.onEdit(this.props.id, title);
        this.setState({editing: false})
    }
    // edit() {
    //     this.setState({editing: false});
    // }
    // save() {
    //     this.setState({editing: true});
    // }
    render(){
        return(
            this.state.editing 
            ?
            <form onSubmit={this.handleSubmit} className="todo-edit-form">
                  <input type="text" ref="title" defaultValue={this.props.todo}/>
                  <DeleteButton className="save icon" icon="save" type="submit" 
                  onClick={this.edit}/> 
            </form>
            :
            <div className={`todo${this.props.completed ? ' completed' : ''}`}>
                <Checkbox completed={this.props.completed} statusChange={() => this.props.statusChange(this.props.id)}/>
                <span className="todo-title">{this.props.todo}</span>
                <DeleteButton className="edit icon" icon="edit" onClick={this.save} />
                <DeleteButton icon="delete icon" className="delete icon" deleteTodo={()=>this.props.deleteTodo(this.props.id)} />
            </div>
        );
    }
}

Todo.propTypes = {
    todo: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    statusChange: React.PropTypes.func.isRequired,
    deleteTodo: React.PropTypes.func.isRequired,
}


export default Todo;