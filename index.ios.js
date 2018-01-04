/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider
} from 'react-native';

export default class TipCalculator extends Component {
  state = {
    amountTotal: 0,
    tipPercentage: 0.15,
    tipTotal: 0,
    split: 1,
    amountPerPerson: 0
  };

  calculateTip(value) {
    console.log(value);
    this.state.amountTotal = parseInt(value);
    this.state.tipTotal = value * this.state.tipPercentage;
    this.setState(this.state);
    this.splitBill(this.state.split);
  }

  splitBill(value) {
    console.log("splitBill", value)
    this.state.split = value;
    this.state.amountPerPerson = ((this.state.amountTotal + this.state.tipTotal) / value).toFixed(2);
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text>
          Total Amount:
        </Text>

        <TextInput style={styles.textInput} onChangeText={this.calculateTip.bind(this)}>
        </TextInput>
      </View>

        <View style={styles.flexContainer}>
        <Text>
          Split Amongst {this.state.split}
        </Text>
          <Slider
            maximumValue={10}
            minimumValue={1}
            step={1}
            value={this.state.split}
            style={styles.slider}
            onValueChange={this.splitBill.bind(this)}
            />
          </View>

        <View style={styles.flexContainer}>
        <Text>
          Amount Per Person:
        </Text>

        <Text style={styles.amount}>
          ${this.state.amountPerPerson}
        </Text>
        </View>

        <View style={styles.flexContainer}>
        <Text>
          Total Tip:
        </Text>

        <Text style={styles.amount}>
          ${this.state.tipTotal.toFixed(2)}
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  textInput: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
    height: 50,
    alignSelf: 'stretch',
    borderColor: '#60b7e2',
    borderWidth: 1,
    flex: 2
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  slider: {
    margin: 5,
    height: 40,
    flex: 2
  }
});

AppRegistry.registerComponent('TipCalculator', () => TipCalculator);
