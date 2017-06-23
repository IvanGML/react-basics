import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', null, 'React TODO');

class App extends React.Component {
    render(){
        return(
            <div>
                {title}
                <p>Hello</p>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)