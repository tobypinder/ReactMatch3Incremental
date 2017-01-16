import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fcf'
  },
  quantity: {
    flex: 1,
    backgroundColor: '#ffc',
    alignSelf: 'stretch'
  },
  quantityText: {
    fontSize: 24
  },
  description: {
    backgroundColor: '#ccf',
    flex: 3,
    alignSelf: 'stretch'
  },
});


export default class Item extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./icons/"+this.props.name+".svg")} style={{width: this.props.size, height: this.props.size}} />
        <View style={styles.quantity}><Text style={styles.quantityText}>x 0</Text></View>
        <View style={styles.description}><Text>Lorem Ipsum Dolor Sit Amet</Text></View>
      </View>
    );
  }
}
