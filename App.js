import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SeachBar/SearchBar';
import * as urls from './constants/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    }
  }

  componentDidMount() {
  }

  searchShow = (searchTerm) => {
    let searchURL = urls.BASE_URL + urls.SEARCH_SHOW + searchTerm;
    fetch(searchURL, {
      methods: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      response.json().then((data) => this.setState({ shows: data }));
    }).catch((error) => console.log(error))
  }
  
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <SearchBar searchShow = { (searchTerm) => this.searchShow(searchTerm) }/>
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
