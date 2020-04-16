import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    this.refs.itemInput.focus();
  }
  onSubmit(e) {
    e.preventDefault();
    var newItemValue = this.refs.itemInput.value;
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset()
    }
  }
  render(){
    return (
      <div>
        <h1>Todo List</h1>
        <form ref="form" onSubmit={this.onSubmit}>
          <input ref="itemInput" type="text" placeholder="Enter your task here..."></input>
          <button type="submit">Add</button>
        </form>   
      </div> 
    ); 
  }
}

export default TodoForm;