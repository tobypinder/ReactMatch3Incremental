import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#cfc',
    minHeight: 300
  }

});

export default class MinigameMatch3 extends React.Component {
  _pushed() {
    console.log("You tapped the button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title={"Fake"} onPress={this._pushed}  />
      </View>
    );
  }

};
