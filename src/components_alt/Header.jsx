import React from 'react';

const Header = props => 
   <header className="todo_header">
      <h1 className="todo_headline">
         {props.title}
      </h1>
   </header>
;

Header.propTypes = {
   title: React.PropTypes.string.isRequired
}

export default Header;