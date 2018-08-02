import React from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput 
          onChangeText={(searchTerm) => this.setState({ searchTerm })}
          value={this.state.searchTerm}
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={18} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    width: Dimensions.get("window").width - 20,
    borderWidth: 1,
    borderColor: "#DDD",
    flexDirection: "row",
    borderRadius: 10
  },
  searchButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  searchInput: {
    flex: 9
  }
});
