import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.contain}>
      <View style={styles.header}>
        <View style={styles.textNotification}>
          <Text style={styles.text}>E-REVIEWS</Text>
          <Text style={styles.subtext}>lorem ipsum dolor</Text>
        </View>
      </View>
      <Image
        source={require('../../../../assets/İcons/comment.png')}
        style={styles.imagesProduct}
        resizeMode="contain"
      />
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
  imagesProduct: {
    width: 45,
    height: 45,
    borderRadius: 7,
    marginLeft: 180,
    marginTop: 27,
  },
  textNotification: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',

    marginTop: 250,
  },
  subtext: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
export default HomeHeader;
