import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos'
import Header from './components/Header'
import Todo from './components/Todo'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: this.props.initialData,
        },
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }
    handleStatusChange(id) {
        let todos = this.state.todos.map(todo => {
                if(todo.id===id){
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        this.setState({
            todos
        })
    }
    handleDeleteTodo(id) {
        let todos = this.state.todos.filter(item=>item.id !== id);
        this.setState({todos});
    }
    render(){
        return(
            <main>
                <Header title={'ToDo LIST'}/>
                <section className="todo-list">
                    {this.state.todos.map((item, index)=> 
                        <Todo key={item.id}
                              id={item.id}
                              todo={item.title}
                              completed={item.completed}
                              statusChange={this.handleStatusChange} 
                              deleteTodo={this.handleDeleteTodo}/>
                    )}
                </section>
            </main>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string,
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired,
    }))
}

ReactDOM.render(
    <App initialData={todos} />,
    document.getElementById('root')
)