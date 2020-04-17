import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount(){
    this.refs.itemInput.focus();
  }
  onClick(e) {
    e.preventDefault();
    var newItemValue = this.refs.itemInput.value;
    if(newItemValue){
      this.props.addItem({newItemValue});
      this.refs.form.reset()
    }
    // console.log(newItemValue);
  }
  render(){
    return (
      <div>
        <h1>Todo List</h1>
        <form ref="form">
          <input ref="itemInput" type="text" placeholder="Enter your task here..."></input>
          <button type="submit" onClick={this.onClick}>Add</button>
        </form>   
      </div> 
    ); 
  }
}

export default TodoForm;