import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default class ShowsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.shows);
    return (
      <ScrollView style={styles.showsList}>
        {this.props.shows.map((show) => {
          return (
            <TouchableOpacity 
              key={show.id} 
              style={styles.showItem}
            >
              <Image
                style={styles.showImage}
                source={{ uri: show.image.medium}}
              />
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
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  showsList: {
    flex: 1,
    width: Dimensions.get("window").width - 20,
    paddingVertical: 20
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
    height: 40
  },
  showViewIcon: {
    padding: 10
  }
});
