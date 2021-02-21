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
import { ListItem } from 'react-native-elements';

export default class DonatetBookScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      requestedBookList: '',
    };
    this.requestRef = null;
  }

  getRequestedBookList = () => {
    this.requestRef = db.collection('Exchange').onSnapshot((snapshot) => {
      var requestedBookList = snapshot.docs.map((document) => document.data());
      this.setState({
        requestedBookList: requestedBookList,
      });
    });
  };

  componentDidMount = () => {
    this.getRequestedBookList();
  };

  render() {
    console.log(this.state.requestedBookList);
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.requestedBookList}
          renderItem={({ item, i }) => {
            return (
              <ListItem
                key={i}
                title={item.ItemName}
                subtitle={item.Reason}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                rightElement={
                  <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#ffff' }}>Exchange</Text>
                  </TouchableOpacity>
                }
                bottomDivider
              />
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 30,
  },
});
