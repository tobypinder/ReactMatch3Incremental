import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Inventory from      '../Inventory/Inventory.js'
import MinigameMatch3 from '../MinigameMatch3/MinigameMatch3.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5FCFF'
  },
  inventory: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MinigameMatch3 />
        <Inventory />
      </View>
    );
  }
}
