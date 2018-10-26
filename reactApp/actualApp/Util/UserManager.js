import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput
} from 'react-native';


export default class UsersManager extends React.Component {

  render(){

    let pic = {
      uri:'http://www.nkcbusinesscouncil.com/wp-content/uploads/2017/04/logo1.jpg'

    }
    return (

      //<View style={styles.container}>
    <View>


    <TextInput
    placeholder="Enter Name:"
    onChangeText={(value) => this.setState({name: value})}

    //value={this.state.name}
    //global.name={this.state.name}
    style={{width:200,margin:10}}
    />

    <TextInput
    placeholder="Enter Email:"
    onChangeText={(value) => this.setState({email: value})}
    //value={this.state.email}

    //global.email={this.state.email}
    style={{width:200,margin:10}}
    />

    <TextInput
    placeholder="Enter Password:"
    onChangeText={(value) => this.setState({password: value})}
    //value={this.state.password}
    //global.password={this.state.password}
    style={{width:200,margin:10}}
    />

    <TextInput
    placeholder="Enter ZIP Code:"
    onChangeText={(value) => this.setState({zip: value})}
    //value={this.state.zip}
    //global.zipCode={this.state.username}
    style={{width:200,Margin:10}}
    />
    </View>

    );
  }
}
