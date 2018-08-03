import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";

import * as urls from '../../constants/api';

import { FontAwesome } from "@expo/vector-icons";

export default class ShowDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: [],
      allEpisodes: []
    };
  }

  strip_html_tags = str => {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/<[^>]*>/g, "");
  };

  allSeasons = (showId) => {
    let allSeasonsURL = urls.BASE_URL + '/shows/' + showId + '/seasons';
    fetch(allSeasonsURL, {
      methods: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        response.json().then(data => {
          console.log(data);
          this.setState({seasons: data})
        });
      })
      .catch(error => console.log(error));
  }

  allEpisodes = (seasonId) => {
    let allEpisodesURL = urls.BASE_URL + '/shows/' + seasonId + '/episodes';
    fetch(allEpisodesURL, {
      methods: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        response.json().then(data => {
          this.setState({allEpisodes: data});
        });
      })
      .catch(error => console.log(error));
  }

  renderEpisode = (seasonNumber, episode) => {
    if (seasonNumber === episode.season) {
      return <Text>{episode.name}</Text>
    }
  }

  renderImage = (show) => {
    if (show.image !== null) {
      return <Image style={styles.showImage} source={{ uri: show.image.medium }} />;
    }
  }

  componentDidMount() {
    this.allEpisodes(this.props.navigation.state.params.show.id);
  }

  render() {
    let show = this.props.navigation.state.params.show;
    return <View style={styles.detailsContainer}>
        <View style={styles.details}>
          {this.renderImage(show)}
          <View style={styles.info}>
            <Text>{show.name}</Text>
            <Text>
              {show.schedule.days.join(" ")} - {show.schedule.time}
            </Text>
            <Text>{show.genres.join(", ")}</Text>
          </View>
        </View>
        <View style={styles.sinopsis}>
          <ScrollView>
            <Text>Sinopsis:</Text>
            <Text>{this.strip_html_tags(show.summary)}</Text>
          </ScrollView>  
        </View>
        <ScrollView style={styles.seasons}>
          { 
            this.state.allEpisodes.map((episode) => {
              return (
              <TouchableOpacity 
                key={episode.id} 
                style={styles.episodeContainer}
                  onPress={() => this.props.navigation.navigate("EpisodeDetails", { show, episode })}
              >
                  <Text>
                    Temporada {episode.season} - E{episode.number}: {episode.name}
                  </Text>
                  <FontAwesome name="chevron-right" size={20} color="#000" />
                </TouchableOpacity>
              );
            })
          }
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Home")}>
            <FontAwesome name="chevron-left" size={20} color="#000" />
            <Text style={styles.buttonText}>Atrás</Text>
          </TouchableOpacity>
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    marginHorizontal: 20
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  showImage: {
    width: 100,
    height: 100
  },
  info: {
    height: 100,
    alignItems: "flex-start",
    justifyContent: "space-around"
  },
  showViewIcon: {
    padding: 10
  },
  sinopsis: {
    height: 150,
  },
  seasons: {
    flex: 1,
    marginVertical: 20
  },
  buttonContainer: {
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#ddd"
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 20
  },
  seasonImage: {
    width: 40,
    height: 40
  },
  episodeContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    backgroundColor: "rgba(245, 245, 244, 0.5)",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5
  }
});
