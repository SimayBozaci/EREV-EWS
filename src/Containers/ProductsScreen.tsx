import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductHeader from '../Components/Ereviews/ProductHeader';
import ProductList from '../Components/Ereviews/ProductList';

const ProductScreen = ({}) => {
  return (
    <View style={styles.container}>
      <ProductHeader />
      <ProductList />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
