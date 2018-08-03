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

import { FontAwesome } from "@expo/vector-icons";

export default class ShowDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text></Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text>Atras</Text>
        </TouchableOpacity>
      </View>
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