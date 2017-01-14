import React, { Component } from 'react';
import './Item.css';


class Item extends Component {
  render() {
    return <img src={"/img/item/"+this.props.name+".svg" alt={this.props.name}} width={this.props.size} height={this.props.size}></img>;
  }
}

export default Item;
