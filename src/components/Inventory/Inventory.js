import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Item from '../Item/Item.js'

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

  render() {
    return (
      <ScrollView contentContainerStyle={styles.inventory}>
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
        <Item name="potion" size="32" />
      </ScrollView>
    );
  }
}
