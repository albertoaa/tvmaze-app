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

export default class EpisodeDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  renderImage = (episode) => {
    if(episode.image !== null) {
      return <Image style={styles.showImage} source={{ uri: episode.image.medium }} />;
    }
  }

  strip_html_tags = str => {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/<[^>]*>/g, "");
  };

  componentDidMount() {
  }

  render() {
    let episode = this.props.navigation.state.params.episode;
    let show = this.props.navigation.state.params.show;
    console.log(episode);
    return <View style={styles.detailsContainer}>
        <View style={styles.details}>
          {this.renderImage(episode)}
          <View style={styles.info}>
            <Text>Nombre: {episode.name}</Text>
            <Text>Número: {episode.number}</Text>
            <Text>Temporada: {episode.season}</Text>
          </View>
        </View>
        <View style={styles.sinopsis}>
          <Text>Sinopsis:</Text>
          <Text>{this.strip_html_tags(episode.summary)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(
                "ShowDetails",
                { show, back: "Home" }
              )}>
            <FontAwesome name="chevron-left" size={20} color="#000" />
            <Text style={styles.buttonText}>Atrás</Text>
          </TouchableOpacity>
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  showImage: {
    width: 100,
    height: 100
  },
  info: {
    height: 100,
    width: 200,
    alignItems: "flex-start",
    justifyContent: "space-around"
  },
  showViewIcon: {
    padding: 10
  },
  sinopsis: {
    padding: 20
  },
  seasons: {
    flex: 1,
    margin: 20
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
