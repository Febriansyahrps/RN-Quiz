import React from 'react';
import { View, StyleSheet } from 'react-native';

import Routes from './component/Router';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
