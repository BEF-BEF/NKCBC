import React from 'react';
import { ScrollView, StyleSheet , Image,View,Text,AppRegistry} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

export default class logInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    const { navigate } = this.props.navigation;

    return (
      /*
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>loging in</Text>
            </TouchableOpacity>
          </View>
*/
        <Text>yeet</Text>



    );
  }
}
