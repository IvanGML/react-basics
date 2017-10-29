import React from 'react';

import Checkbox from './Checkbox';

function Item(props) {
   return(
      <section className="todo__item">
         <Checkbox completed={props.completed} handleClick={props.handleClick}/>
         <p className="todo__discription">{props.discription}</p>
         <button className="todo__button todo__button-delete" onClick={props.onDelete}>Delete</button>
      </section>
   );
}

export default Item;