import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection:   'row',
    justifyContent:  'center',
    alignItems:      'flex-start',
    alignSelf:       'stretch',
    backgroundColor: '#fcf'
  },
  quantity: {
    flex: 1,
    backgroundColor: '#ffc',
    alignSelf:       'stretch',
    justifyContent:  'center',
    flexGrow:        0,
    flexShrink:      0
  },
  quantityText: {
    fontSize: 24,
    textAlign: 'right',
    paddingRight: 5,
    paddingLeft: 5,
    width: 80
  },
  description: {
    backgroundColor: '#ccf',
    alignSelf:       'stretch',
    flex:            3,
    justifyContent:  'center'
  },
  descriptionText: {
    paddingLeft:     5,
    paddingRight:    5,
    paddingTop:      5,
    paddingBottom:   5,
    textAlign:       'center'
  },
  button: {
    backgroundColor: '#cff',
    width: 60,
    alignSelf:       'stretch',
    justifyContent:  'center'
  },
  buttonText: {
    alignSelf: 'center',
    textAlign:       'center'
  }
});


export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity:    Math.floor(Math.random()*1000),
      icon:        this.props.name,
      description: "Lorem Ipsum Dolor Sit Amet"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./icons/"+this.state.icon+".svg")} style={{width: this.props.size, height: this.props.size}} />
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>
            x {this.state.quantity}
          </Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {this.state.description}

          </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>CTA</Text>
        </View>
      </View>
    );
  }
}
