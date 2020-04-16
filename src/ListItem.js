import React from 'react';

class ListItem extends React.Component {
  /*
  props:
    item: {index, value, done}
    index: order in the list
    removeItem: function
    markItem: function
  */
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    // Different action by done or not
    // If done (in DoneList), click will remove it
    // Otherwise, click will mark it as done and move it to DoneList from TodoList
    // this.props.index
    this.props.item.done ? this.props.removeItem(this.props.index) : this.props.markItem(this.props.index);
  }
  render() {
    return(
      <li onClick={this.onClick}> {this.props.item.value} </li>
    );
  }
}

export default ListItem;