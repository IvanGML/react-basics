import React from 'react';

import Checkbox from './Checkbox';

function Item(props) {
   return(
      <section className="todo_item">
         <Checkbox completed={props.completed} handleClick={props.handleClick}/>
         <p className="todo_discription">{props.discription}</p>
         <button className="todo_button todo_button-delete" onClick={props.onDelete}>Delete</button>
      </section>
   );
}

export default Item;