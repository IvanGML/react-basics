import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos_alt';
import Header from './components_alt/Header';
import Item from './components_alt/Item';
import Form from './components_alt/Form';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos,
            stateOfCheckbox: false
        };
        this.onAdd = this.onAdd.bind(this);
    }

    handleClick(id) {
        let todos = this.state.todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item;
        });
        this.setState({
            todos
        }, () => console.log(this.state));
    }

    onDelete(id) {
        let todos = this.state.todos.filter(item => item.id !== id);
        this.setState({ todos }, ()=>{
            console.log(id, this.state.todos);
        });
    }

    onAdd(newTitle) {
        let newToDo = {
            id: this.state.todos[this.state.todos.length-1].id+1,
            discription: newTitle,
            completed: false
        }
        let todos = this.state.todos;
        todos.push(newToDo);
        this.setState({ todos })
    }

    render() {
        return(
            <section className="todo">
                <Header title="ToDo list"/>
                <main>
                    {this.state.todos.map((item, index) => 
                        <Item 
                            key={item.id}
                            discription={item.discription} 
                            completed={item.completed}
                            handleClick={()=> this.handleClick(item.id)}
                            onDelete={()=>this.onDelete(item.id)}
                        />)
                    }
                </main>
                <Form onAdd={this.onAdd}/>
            </section>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
