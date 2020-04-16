import React from 'react';
import ListItem from './ListItem';

export class TodoList extends React.Component {
  render(){
    var items = this.props.items.map(
      (item, index) => {
        return (
          <ListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markItem={this.props.markItem} />
        );
      }
    )
    // console.log(items)
    return(
      <div>
        <h1>Scheduled</h1>
        <ul> {items} </ul>
      </div> 
    );
  }
}

export class DoneList extends React.Component {
  render(){
    var items = this.props.items.map(
      (item, index) => {
        return (
          <ListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markItem={this.props.markItem} />
        );
      }
    )
    return(
      <div>
        <h1>Completed</h1>
        <ul> {items} </ul>
      </div>
    );
  }
}