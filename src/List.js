import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
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
        <h1> {this.props.name} </h1>
        <ul> {items} </ul>
      </div> 
    );
  }
}

export default List;