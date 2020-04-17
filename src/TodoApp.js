import React from 'react';
import TodoForm from './TodoForm';
import List from './List';

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.markItem = this.markItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      // Update two lists, todo and done
      todoItems: [{value: "Work out", done: false}, {value: "Learn React", done: false}],
      doneItems: [{value: "Shopping", done: true}, {value: "Thesis", done:true}]
    }
  }
  addItem(todoItem){
    // deal with onSubmit in TodoForm
    this.setState(preState => ({
      todoItems: preState.todoItems.concat([{value: todoItem.newItemValue, done: false}])
    }));
    // console.log(todoItems.length);
  }
  removeItem(itemIndex){
    // deal with click on donelist
    this.setState(preState => ({
      doneItems: preState.doneItems.slice(0,itemIndex).concat(preState.doneItems.slice(itemIndex+1))
    }));
    console.log(itemIndex, "Remove");
  }
  markItem(itemIndex){
    // deal with click on todolist
    var alreadyDone = this.state.todoItems[itemIndex];
    alreadyDone.done = true;
    this.setState(preState => ({
      todoItems: preState.todoItems.slice(0,itemIndex).concat(preState.todoItems.slice(itemIndex+1)),
      doneItems: preState.doneItems.concat(alreadyDone)
    }));
    console.log(itemIndex);
    console.log(alreadyDone.value);
  }
  render(){
    // Deliver different functions to components by props
    return(
      <div>
        <TodoForm addItem={this.addItem} />
        <List name="Todo" items={this.state.todoItems} removeItem={this.removeItem} markItem={this.markItem} />
        <List name="Done" items={this.state.doneItems} removeItem={this.removeItem} markItem={this.markItem} />
      </div>
    );
  }
}

export default TodoApp;