import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './page/ProfileScreen';



const StackNavigator =  createStackNavigator({
   Home :{
     screen: HomeScreen
   }
})

const AppContainer = createAppContainer(StackNavigator)

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}