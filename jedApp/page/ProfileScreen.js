import React, { Component } from 'react'
import { Container, Header, Content, Text,Card,Badge, Right, Button, Icon, CardItem,Thumbnail ,Left,Body} from 'native-base';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
export default class ProfileScreen extends Component {
    static navigationOptions=
        {
        }
    render(){
      return(
        <Navigation>
          <Text>My main Screen</Text>
        </Navigation>
      )
    }
}
    // render(){
    //     return (
    //         <Navigation>
    //           <Header transparent>
    //             <Right>
    //               <Button transparent>
    //                 <Icon name="settings" />
    //               </Button>
    //             </Right>
    //           </Header>
    //           <Content style={{marginTop:-50}}>
    //             <Card transparent style={{alignItems: 'center'}}>
    //             <CardItem>
    //                 <Thumbnail style={{width: 100, height: 100}} source={{uri: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'}} />
    //                 </CardItem>
    //               <Text style={{fontWeight: 'bold'}}>Name Surname</Text>
    //               <Text style={{textAlign: 'center'}}>Position</Text>
    //               <Card transparent>
    //                 <CardItem transparent>
    //                   <Badge style={{backgroundColor: 'red'}}>
    //                     <Text>LV</Text>
    //                   </Badge>
    //                   <Text style={{fontWeight: 'bold'}}> Level 5</Text>
    //                 </CardItem>
    //               </Card>
    //             </Card>
    //             <Card transparent style={{justifyContent: 'center'}}>
    //               <CardItem  transparent style={{justifyContent: 'center'}}>
    //                 <Card style={{justifyContent: 'space-evenly',borderRadius:50,width:'90%',borderColor:'red'}}>
    //                 <Card transparent>
    //                     <Text style={{color: 'grey', textAlign: 'center'}}>EXP</Text>
    //                     <Text
    //                       style={{
    //                         fontWeight: 'bold',
    //                         color: 'blue',
    //                         textAlign: 'center',
    //                       }}>
    //                       12578
    //                     </Text>
    //                   </Card>
    //                   <Card transparent>
    //                     <Text style={{color: 'grey', textAlign: 'center'}}>EXP</Text>
    //                     <Text
    //                       style={{
    //                         fontWeight: 'bold',
    //                         color: 'blue',
    //                         textAlign: 'center',
    //                       }}>
    //                       12578
    //                     </Text>
    //                   </Card>
    //                   <Card transparent>
    //                     <Text style={{color: 'grey', textAlign: 'center'}}>
    //                       E-learning
    //                     </Text>
    //                     <Text
    //                       style={{
    //                         fontWeight: 'bold',
    //                         color: 'blue',
    //                         textAlign: 'center',
    //                       }}>
    //                       2
    //                     </Text>
    //                   </Card>
    //                   <Card transparent>
    //                     <Text style={{color: 'grey', textAlign: 'center'}}>
    //                       Workshops
    //                     </Text>
    //                     <Text
    //                       style={{
    //                         fontWeight: 'bold',
    //                         color: 'blue',
    //                         textAlign: 'center',
    //                       }}>
    //                       5
    //                     </Text>
    //                   </Card>
    //                 <CardItem style={{justifyContent: 'space-evenly'}}>
    //                   <Card transparent>
    //                     <Icon name="play-outline" style={{textAlign: 'center'}} />
    //                     <Text style={{color: 'grey', textAlign: 'center'}}>Lesson</Text>
    //                     <Text
    //                       style={{
    //                         fontWeight: 'bold',
    //                         color: 'blue',
    //                         textAlign: 'center',
    //                       }}>
    //                       2
    //                     </Text>
    //                   </Card>
    //                   <Card transparent>
    //                     <Icon name="book-outline" style={{textAlign: 'center'}} />
    //                     <Text style={{color: 'grey', textAlign: 'center'}}>Read</Text>
    //                     <Text
    //                       style={{
    //                         fontWeight: 'bold',
    //                         color: 'blue',
    //                         textAlign: 'center',
    //                       }}>
    //                       5
    //                     </Text>
    //                   </Card>
    //                   <Card transparent>
    //                     <Icon name="ribbon-outline" style={{textAlign: 'center'}} />
    //                     <Text style={{color: 'grey', textAlign: 'center'}}>Quiz</Text>
    //                     <Text
    //                       style={{
    //                         fontWeight: 'bold',
    //                         color: 'blue',
    //                         textAlign: 'center',
    //                       }}>
    //                       2
    //                     </Text>
    //                   </Card>
    //                 </CardItem>
    //               </Card>
    //               </CardItem>
    //             </Card>      
    //             <Card transparent style={{justifyContent: 'space-evenly'}}>
    //               <CardItem style={{justifyContent: 'space-evenly'}}>
    //                 <Card style={{width:'30%',borderRadius:10}}>
    //                   <Icon name="play-outline" style={{textAlign: 'center'}} />
    //                   <Text style={{color: 'grey', textAlign: 'center'}}>Lesson</Text>
    //                   <Text
    //                     style={{
    //                       fontWeight: 'bold',
    //                       color: 'blue',
    //                       textAlign: 'center',
    //                     }}>
    //                     2
    //                   </Text>
    //                 </Card>
    //                 <Card style={{width:'30%',borderRadius:10}}>
    //                   <Icon name="book" style={{textAlign: 'center'}} />
    //                   <Text style={{color: 'grey', textAlign: 'center'}}>Read</Text>
    //                   <Text
    //                     style={{
    //                       fontWeight: 'bold',
    //                       color: 'blue',
    //                       textAlign: 'center',
    //                     }}>
    //                     5
    //                   </Text>
    //                 </Card>
    //                 <Card style={{width:'30%',borderRadius:10}}>
    //                   <Icon name="Quiz" style={{textAlign: 'center'}} />
    //                   <Text style={{color: 'grey', textAlign: 'center'}}>Quiz</Text>
    //                   <Text
    //                     style={{
    //                       fontWeight: 'bold',
    //                       color: 'blue',
    //                       textAlign: 'center',
    //                     }}>
    //                     2
    //                   </Text>
    //                 </Card>
    //               </CardItem>
    //             </Card>
    //           </Content>
    //         </Navigation>
    //       );
    //     }
        
    // }

const TabNavigator = createBottomTabNavigator({
  HomeScreen1: {
    screen : Screen1
  },
  HomeScreen2: {
    screen : Screen2
  },
})

const Navigation = createAppContainer(TabNavigator);