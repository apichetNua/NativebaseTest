import React, { Component } from 'react'
import { Container, Header, Content, Text,Card,Badge, Right, Button, Icon, CardItem,Thumbnail ,Left,Body} from 'native-base';

export default class Screen2 extends Component {
    static navigationOptions=
    {
        tabBarIcon :({tintColor}) =>{
          return <Icon name="home-outline" style={{color: tintColor}}></Icon>
        }
    }

    render(){
      return (
        <Container>
        <Text>Testadsfaf 2</Text> 
        </Container>
      );
        }
        
    }
    