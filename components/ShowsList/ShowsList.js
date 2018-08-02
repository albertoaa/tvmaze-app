import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default class ShowsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <ScrollView style={styles.showsList}>
        {this.props.shows.map((show) => {
          return(
            <Text>{show.name}</Text>
          )
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  showsList: {
    flex: 1,
    width: Dimensions.get('window').width - 20,
    paddingVertical: 20
  }
});
