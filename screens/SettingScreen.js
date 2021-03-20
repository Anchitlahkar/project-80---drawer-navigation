import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import { MyHeader } from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class SettingScreen extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Setting" />

        <Text>SettingScreen</Text>
      </View>
    );
  }
}
