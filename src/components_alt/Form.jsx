import React from 'react';

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: ""
      }
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({value: event.target.value});
   }

   submitData() {
      if (this.state.value.trim() === "") {
         console.log("you can\'t to do nothing ^^");
         this.setState({value: ""})
         return;
      }
      this.props.onAdd(this.state.value.trim());
      this.setState({value: ""})
   }

   render() {
      return(
         <form className="todo__add">
            <input 
               className="todo__input" 
               type="text" 
               value={this.state.value}
               onChange={this.handleChange}
            />
            <button 
               className="todo__button todo__button-add"
               type="button"
               onClick={() => this.submitData()}>
                  Add new ToDo
            </button>
         </form>
      );
   }
}

export default Form;