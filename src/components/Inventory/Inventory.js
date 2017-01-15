import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Item from '../Item/Item.js'

const styles = StyleSheet.create({
  inventory: {
    marginTop: 3,
    flex: 2,
    flexGrow: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#fcc'
  }
});

export default class Inventory extends React.Component {

  render() {
    return (
      <View style={styles.inventory}>
        <ScrollView>
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
          <Item name="potion" size="64" />
        </ScrollView>
      </View>
    );
  }
}
