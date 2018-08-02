import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SeachBar/SearchBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 40
  },
});
