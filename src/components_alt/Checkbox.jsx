import React from 'react';


function Checkbox(props) {

   // function handleClick() {
   //    return props.handleClick;
   // }

   return(
      <input 
         className="todo__checkbox" 
         type="checkbox" 
         checked={props.completed}
         onChange={props.handleClick}
      />
   );
};

export default Checkbox;