/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {styles} from './styles';
import Message from '../../../img/Message.svg';

export class ItemViewItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleImg}></View>
        <View style={{width: 225, height: 100}}>
          <View style={styles.contentArea}>
            <Text style={styles.contentText1}>ItemViewItem1</Text>
            <Text style={styles.contentText1}>ItemViewItem2</Text>
            <Text style={styles.contentText2}>ItemViewItem3</Text>
          </View>
          <View style={styles.statusArea}>
            <Message />
          </View>
        </View>
      </View>
    );
  }
}

export default ItemViewItem;
