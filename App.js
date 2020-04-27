/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class EventHandlers extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.eventClick = this.eventClick.bind(this);
  }

  eventClick = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    return (
      <>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#04805a',
              width: 50,
              height: 50,
              borderRadius: 50,
              marginTop: 30,
              color: '#fff',
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, alignSelf: 'center'}}>
              <Text
                style={{
                  color: '#fff',
                  alignSelf: 'center',
                }}>
                {this.state.counter}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 2, alignItems: 'center'}}>
          <Button
            onPress={this.eventClick}
            title="Clique aqui para adicionar"
          />
        </View>
      </>
    );
  }
}
