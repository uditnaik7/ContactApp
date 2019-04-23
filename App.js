import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// IMPORT screens 
import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';
import EditContactScreen from './screens/EditContectScreen';


// import react navigetion 
import {createAppContainer,createStackNavigator} from 'react-navigation';


const MainNavigator = createStackNavigator(
  {
    Home:{screen:HomeScreen},
    Add:{screen:AddNewContactScreen},
    Edit:{screen:EditContactScreen},
    View:{screen:ViewContactScreen}

  },{
    defaultNavigationOptions:{
      headerTintColor:"#FFF",
      headerStyle:{
        backgroundColor:"#B83227",
      },
      headerTitleStyle:{
        color:"#fff",
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;