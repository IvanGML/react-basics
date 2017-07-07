import React from 'react';

const Stats = props => {
    let total = props.todos.length;
    let completedNew = (props.todos.filter(todo => todo.completed)).length;
    let remind = total - completedNew;
    // let i = 0;
    // let completedFunc = () =>{
    //     let completedArray = props.todos.forEach(item => {
    //         if(item.completed) {
    //             i++;
    //         }
    //     })
    //     return i;
    // }
    // let completed = completedFunc();
    return(
        <table className="stats">
            <tbody>
                <tr>
                    <th>Всего задач:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Выполненно:</th>
                    <td>{completedNew}</td>
                </tr>
                <tr>
                    <th>Осталось:</th>
                    <td>{remind}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;