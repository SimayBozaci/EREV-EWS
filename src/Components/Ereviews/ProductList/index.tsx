import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import jsonDataTwo from '../../../data/comments.json';
import jsonData from '../../../data/products.json';

const Stack = createStackNavigator();

const ProductScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ürünler Listesi"
        component={ProductListScreen}
        options={{
          title: 'Ürünler Listesi',
          headerStyle: {
            backgroundColor: '#8FBC8F',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="CommentScreen"
        component={CommentScreen}
        options={{
          title: 'Yorumlar',
          headerStyle: {
            backgroundColor: '#8FBC8F',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
};

const ProductListScreen = () => {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate('CommentScreen');
  }

  return (
    <View style={styles.mainScreen}>
      <FlatList
        data={jsonData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.mainbutton} onPress={onPress}>
            <View style={styles.dataItem}>
              <Text style={styles.productText}>{item.name}</Text>
              <Text style={styles.productText}>{item.brand}</Text>
              <View style={styles.imagebackpage}>
                <Image style={styles.image} source={{uri: item.image}} />
              </View>

              <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Yoruma Git</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const CommentScreen = () => {
  return (
    <View style={styles.mainScreen}>
      <FlatList
        data={jsonDataTwo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <>
            <View style={styles.dataItem}>
              <Text style={styles.productIndex}>{item.index}</Text>
              <Text style={styles.productPhoneName}>{item.phone_name}</Text>
              <Text style={styles.productcommentauthor}>
                {item.comment_author}
              </Text>
              <Text style={styles.phone_price}>{item.phone_price}</Text>
              <Text style={styles.comment_detail}>{item.comment_detail}</Text>
              <Text style={styles.comment_date}>{item.comment_date}</Text>
              <Text style={styles.comment_point}>{item.comment_point}</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#8FBC8F',
  },
  image: {
    width: 120,
    height: 120,
    marginLeft: 91,
    marginTop: 9,
  },
  imagebackpage: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 21,
    textAlign: 'center',
    marginTop: 1,
    fontWeight: 'bold',
    color: 'white',
  },
  productText: {
    color: 'darkslategray',
    fontFamily: 'Times',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 'auto',
    textAlign: 'center',
  },
  mainbutton: {
    // borderWidth: 1,
    margin: 15,
    borderRadius: 1,
    // width: 400,
    // height: 300,
  },
  button: {
    backgroundColor: '#2E8B57',
    marginLeft: 75,
    marginRight: 65,
    marginTop: 25,
    height: 35,
    borderRadius: 19,
  },
  dataItem: {
    backgroundColor: 'white',
    padding: 15,
    margin: 21,
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  productIndex: {
    // borderWidth: 0.5,
    textAlign: 'center',
    marginBottom: 3,
    color: 'black',
  },
  productPhoneName: {
    color: '#01796F',
    fontWeight: 'bold',
    fontSize: 15,
  },
  productcommentauthor: {
    padding: 7,
    textAlign: 'center',
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 15,
  },
  phone_price: {
    // borderWidth: 1,
    color: 'black',
    textAlign: 'center',
  },
  comment_date: {
    color: '#2E8B57',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  comment_point: {
    fontSize: 3,
  },
  comment_detail: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ProductScreen;
