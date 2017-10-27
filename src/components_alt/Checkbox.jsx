import React from 'react';


function Checkbox(props) {

   // function handleClick() {
   //    return props.handleClick;
   // }

   return(
      <input 
         className="todo_checkbox" 
         type="checkbox" 
         checked={props.completed}
         onChange={props.handleClick}
      />
   );
};

export default Checkbox;