import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Item from           '../Item/Item.js'
import MinigameMatch3 from '../MinigameMatch3/MinigameMatch3.js'

const styles = StyleSheet.create({
  inventory: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default class Inventory extends React.Component {
  render() {
    return (
      <View style={styles.inventory}>
        <Item name="potion" size="64" />
        <Item name="potion" size="64" />
        <Item name="potion" size="64" />
      </View>
    );
  }
}
