import React from 'react';
import TodoForm from './TodoForm';
import {TodoList, DoneList} from './List';

// Initialize with some examples...
var todoItems = [];
todoItems.push({index: 1, value: "Work out", done: false});
todoItems.push({index: 2, value: "Learn react", done: false});
todoItems.push({index: 3, value: "Thesis", done: false});
var doneItems = [];
doneItems.push({index: 4, value: "Shopping", done: true});
doneItems.push({index: 5, value: "Attendance", done: true});
doneItems.push({index: 6, value: "Quiz", done: true});


class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.markItem = this.markItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      // Update two lists, todo and done
      todoItems: todoItems,
      doneItems: doneItems
    }
  }
  addItem(todoItem){
    // deal with onSubmit in TodoForm
    todoItems.unshift({
      index: todoItems.length+1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({todoItems: todoItems})
    console.log(todoItems.length);
  }
  removeItem(itemIndex){
    // deal with click on donelist
    doneItems.splice(itemIndex,1);
    this.setState({doneItems: doneItems});
    console.log(itemIndex);
  }
  markItem(itemIndex){
    // deal with click on todolist
    var alreadyDone = todoItems[itemIndex];
    todoItems.splice(itemIndex,1);
    alreadyDone.done = true;
    doneItems.push(alreadyDone);
    this.setState({todoItems:todoItems, doneItems:doneItems});
    console.log(itemIndex);
  }
  render(){
    // Deliver different functions to components by props
    return(
      <div>
        <TodoForm addItem={this.addItem} />
        <TodoList items={todoItems} removeItem={this.removeItem} markItem={this.markItem} />
        <DoneList items={doneItems} removeItem={this.removeItem} markItem={this.markItem} />
      </div>
    );
  }
}

export default TodoApp;