import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SeachBar/SearchBar';
import ShowsList from './components/ShowsList/ShowsList';
import * as urls from './constants/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    }
  }

  searchShow = (searchTerm) => {
    if (searchTerm === '') {
      this.searchAllShows();
    } else {
      let searchURL = urls.BASE_URL + urls.SEARCH_SHOW + searchTerm;
      fetch(searchURL, {
        methods: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          response.json().then(data => {
            let shows = [];
            data.map((show) => {
              shows.push(show.show);
            });
            this.setState({ shows })
          });
        }).catch((error) => console.log(error))
    }
  }

  searchAllShows = () => {
    let searchURL = urls.BASE_URL + urls.ALL_SHOWS;
    fetch(searchURL, {
      methods: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        response.json().then(data => this.setState({ shows: data }));
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.searchAllShows();
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar searchShow = { (searchTerm) => this.searchShow(searchTerm) }/>
        <ShowsList shows = {this.state.shows}/>
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
