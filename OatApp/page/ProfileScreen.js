import React, { Component } from 'react'
import { Container, Content, Text,Card, Icon, CardItem} from 'native-base';
import HeadeProfile from '../Components/HeadeProfile.js' ;
import CardContentProfile from '../Components/CardContentProfile.js' ;
import styled from 'styled-components'
export default class ProfileScreen extends Component {
    render(){
        return (
            <Container style={{marginTop:-30}}>
              <Content style={{padding:20}}>
                <HeadeProfile />  
                <Card style={{borderRadius:50,alignItems:'center'}}>
                  <CardItem style={{justifyContent:'space-evenly',width:"80%",padding:0,margin:0}}>
                    <CardContentProfile textHead={"EXP"} score={"12578"} icon={""} ShowTransparent={true}/>
                    <CardContentProfile textHead={"Points"} score={"1200"} icon={""} ShowTransparent={true}/>
                  </CardItem>
                  <CardItem style={{justifyContent:'space-evenly',width:"80%"}}>
                    <CardContentProfile textHead={"E-learning"} score={"2"} icon={""} ShowTransparent={true}/>
                    <CardContentProfile textHead={"Workshop"} score={"5"} icon={""} ShowTransparent={true}/>
                  </CardItem>
                  <CardItem style={{justifyContent:'space-evenly',width:"80%"}}>
                      <CardContentProfile textHead={"Lesson"} score={"2"} icon={"play-outline"} ShowTransparent={true}/>
                      <CardContentProfile textHead={"Read"} score={"5"} icon={"book-outline"} ShowTransparent={true}/>
                      <CardContentProfile textHead={"Quiz"} score={"2"} icon={"car-sport-outline"} ShowTransparent={true}/>
                  </CardItem>          
                </Card>  
                  <CardItem style={{justifyContent:'space-between',width:'90%'}}>
                        <CardContentProfile textHead={"Learning Path"} score={""} icon={"finger-print-outline"} ShowTransparent={false}/>
                        <CardContentProfile textHead={"Rewards"} score={""} icon={"gift-outline"} />
                        <CardContentProfile textHead={"Achievement"} score={""} icon={"trophy-outline"} ShowTransparent={false}/>
                  </CardItem>
              </Content>
            </Container>
          );
        }
}
