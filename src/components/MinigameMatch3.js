import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    flexShrink: 0,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#cfc'
  }

});

export default class MinigameMatch3 extends React.Component {
  _pushed() {
    console.log("You tapped the button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title={"Pushable Button"} onPress={this._pushed}  />
      </View>
    );
  }

};
