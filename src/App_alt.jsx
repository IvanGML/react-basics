import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components_alt/Header';
import Item from './components_alt/Item';
import todos from './todos_alt';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos,
            stateOfCheckbox: false
        };
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
            </section>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
