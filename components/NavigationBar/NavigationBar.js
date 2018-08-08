import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.navigationButton}
          onPress={() => this.props.navigation.navigate("FavShows")}
        >
          <FontAwesome name="heart-o" size={20} color="#000" />
          <Text style={{ textAlign: 'center' }}>Favourites{'\n'}Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton}>
          <FontAwesome name="users" size={20} color="#000" />
          <Text style={{ textAlign: 'center' }}>Actores/{'\n'}Actrices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton}>
          <FontAwesome name="cog" size={20} color="#000" />
          <Text style={{ textAlign: 'center' }}>Configuración/{'\n'}Preferencias</Text>
        </TouchableOpacity>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    paddingTop: 20,
    paddingHorizontal: 20,
    width: Dimensions.get('window').width,
    borderTopWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navigationButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
