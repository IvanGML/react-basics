import React from 'react';
import ReactDOM from 'react-dom';

class Mainn extends React.Component {
    render() {
        return(
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ratione.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, unde?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, voluptatum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, magni!</p>
            </div>
        );
    }
}

ReactDOM.render(
    <Mainn />,
    document.getElementById('root')
);
