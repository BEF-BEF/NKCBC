import React from 'react';
import { ScrollView, StyleSheet , Image,View,Text} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    let pic = {
      uri: 'http://www.nkcbusinesscouncil.com/wp-content/uploads/2017/04/logo1.jpg'
    };

    return (
      <View style={{flex: 1}}>
  <View style={{flex: 1, backgroundColor: 'rgb(102, 30, 40)'}} />
  <Image source={pic} style={{width: 193*2, height: 110*2}}/>
  <View style={{flex: 1, backgroundColor: 'black'}} />

  //the text goes in about not hs
  <Text> Our goal as the NKC Business Council is to get you as KC people to visit all 20 of our NKC restaurants, so we have put together a scavenger hunt. When you go to each restaurant you will scan the QR code and get a cool little fact and the restaurant will be checked off in your app. After you have scanned all of the codes at all of the restaurants you will get a $50 Visa giftcard to attend a restaurant of your choice. Have Fun Eating(:</Text>
  //<View style={{flex: 3, backgroundColor: 'white'}} />
  <View style={{flex: 15, backgroundColor: 'black'}} />
//102,30,40 (66,1E,28)
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
