import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  icon: {
    flex: 1,
    backgroundColor: '#cff'
  },
  quantity: {
    flex: 1,
    backgroundColor: '#ffc'
  },

  description: {
    backgroundColor: '#ccf',
    flex: 3
  },
});


export default class Item extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Image source={require("./icons/"+this.props.name+".svg")} style={{width: this.props.size, height: this.props.size}} />
        </View>
        <View style={styles.quantity}><Text>x 0.</Text></View>
        <View style={styles.description}><Text>Lorem Ipsum Dolor Sit Amet</Text></View>
      </View>
    );
  }
}
