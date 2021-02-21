import * as React from 'react';
import { Header } from 'react-native-elements';

export const MyHeader = (props) => {
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: { color: 'Black', fontSize: 20, fontWeight: 'bold' },
      }}
      backgroundColor="#6f4e37"
    />
  );
};