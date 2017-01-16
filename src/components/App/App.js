import React from 'react'
import { StyleSheet, View } from 'react-native'

import Inventory from      '../Inventory/Inventory.js'
import MinigameMatch3 from '../MinigameMatch3/MinigameMatch3.js'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#cfc',
    flex: 1
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
