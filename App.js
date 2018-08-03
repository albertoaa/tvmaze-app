import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/Home/Home';
import ShowDetails from './components/ShowDetails/ShowDetails';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';
import { createSwitchNavigator } from "react-navigation";

const MainNavigator = createSwitchNavigator({
  Home: { screen: Home },
  ShowDetails: { screen: ShowDetails },
  EpisodeDetails: { screen: EpisodeDetails },
  initialRouteName: "Home"
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator/>
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
