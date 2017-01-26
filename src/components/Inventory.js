import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Item from './Item.js'

const styles = StyleSheet.create({
  inventory: {
    marginTop: 3,
    flex: 2,
    justifyContent: 'flex-start',
    //alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#fcc'
  }
});

export default class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    for(var i = 0; i <= 30; i++)
    {
      this.state.items.push(
        {
          quantity:    Math.floor(Math.random()*1000),
          icon:        'potion',
          description: "Lorem SIpsum Dolor Sit Amet"
        }
      )
    }
  }

  render_list(items) {
    return items.map((item, index) =>
      <Item size="32" key={index} state={item} />
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.inventory}>
        {this.render_list(this.state.items)}
      </ScrollView>
    );
  }
}
