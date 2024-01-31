import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.contain}>
      <View style={styles.header}>
        <View style={styles.textNotification}>
          <Text style={styles.text}>Hakkımızda</Text>
          <Text style={styles.subtext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 1,
    backgroundColor: '#8FBC8F',
  },
  contain: {
    backgroundColor: '#8FBC8F',
    flex: 1,
  },

  textNotification: {
    flex: 1,
  },
  text: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
    fontFamily: 'sans-serif',
  },
  subtext: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 25,
  },
});
export default HomeHeader;
