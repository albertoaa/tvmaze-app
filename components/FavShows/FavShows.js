import React from 'react';
import { AsyncStorage, Dimensions, Image, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default class FavShows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favShows: []
    }
  }

  renderImage = (show) => {
    if (show.image !== null) {
      return <Image style={styles.showImage} source={{ uri: show.image.medium }} />;
    }
  }

  showDetails = (show) => {
    this.props.navigation.navigate("ShowDetails", { show, back: "FavShows" });
  }

  renderTitle = () => {
    if(this.state.favShows.length === 0) {
      return(
        <Text style={styles.header}>No tienes shows favoritos</Text>
      )
    } else {
      return(
        <Text style={styles.header}>Shows Favoritos</Text>
      )
    }
  }

  componentDidMount() {
    AsyncStorage.getItem("favouriteShows").then(response => {
      this.setState({favShows: JSON.parse(response)});
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>{this.renderTitle()}</Text>
        {this.state.favShows.map((show) => {
          return(
            <TouchableOpacity
              key={show.id}
              style={styles.showItem}
              onPress={() => this.showDetails(show)}
            >
              {this.renderImage(show)}
              <View style={styles.showDescription}>
                <Text>{show.name}</Text>
                <Text>{show.genres}</Text>
              </View>
              <FontAwesome
                name="eye" size={20}
                color="#000"
                style={styles.showViewIcon}
              />
            </TouchableOpacity>
          )
        })}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Home")}>
            <FontAwesome name="chevron-left" size={20} color="#000" />
            <Text style={styles.buttonText}>Atrás</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width - 20,
    paddingVertical: 20,
    alignItems: 'center'
  },
  showItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(221,221,221, 0.4)",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10
  },
  showImage: {
    width: 70,
    height: 70
  },
  showDescription: {
    width: 200,
    height: 40,
    paddingLeft: 10
  },
  showViewIcon: {
    padding: 10
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 10
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
  header: {
    textAlign: 'center',
    fontSize: 20
  }
});
