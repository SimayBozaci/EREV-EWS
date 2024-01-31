import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeHeader from '../Components/Ereviews/HomeHeader';
import HomePage from '../Components/Ereviews/HomePage';

const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomePage />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
