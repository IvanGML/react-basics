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
        }
    }
    render(){
        return(
            <main>
                <Header title={'ToDo LIST'}/>
                <section className="todo-list">
                    {this.state.todos.map((item, index)=> 
                        <Todo key={index}
                              todo={item.title}
                              completed={item.completed} />
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