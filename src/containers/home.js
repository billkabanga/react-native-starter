import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import fetchMovies from '../services/api';

export default class HomePage extends Component {
  state = {};

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const data = await fetchMovies();
    console.log('data-fetch', data);
    data && this.setState({data: data._embedded.episodes});
  };

  render() {
    console.log('data', this.state.data);
    return (
      <View>
        <Text>Rick & Morty Episode List</Text>
        <FlatList
          data={this.state.data}
          contentContainerStyle={styles.container}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image
                source={{
                  uri: `${item.image.medium}`,
                  height: 180,
                  width: 180,
                }}
              />
              <Text>name here</Text>
              <Text>Season: 1</Text>
              <Text>Episode: 25</Text>
              <TouchableOpacity>
                <Text>See more...</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    padding: 5,
  },
});
