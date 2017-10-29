import React from 'react';

const Header = props => 
   <header className="todo__header">
      <h1 className="todo__headline">
         {props.title}
      </h1>
   </header>
;

Header.propTypes = {
   title: React.PropTypes.string.isRequired
}

export default Header;