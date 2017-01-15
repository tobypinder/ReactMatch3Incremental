import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row'
  },
  quantity: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    flex: 1
  }
});

export default class Item extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <Image source={require("./icons/"+this.props.name+".svg")} style={[styles.icon, {width: this.props.size, height: this.props.size}]} />
        <Text style={styles.quantity}> x 0. Lorem Ipsum Dolor Sit Amet</Text>
      </View>
    );
  }
}
