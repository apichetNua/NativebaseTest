import React from 'react'
import { Text,Card, Icon, CardItem, Body} from 'native-base';

function CardContentProfile(props) {
   
    return (
        <Card transparent >
                 {
                     props.ShowTransparent ? 
                    
                        <Card transparent style={{width:100}}>
                            <Icon name={props.icon ? `${props.icon}`:""} style={{textAlign: 'center',padding:5}} />
                            <Text style={{color: 'grey', textAlign: 'center',padding:5}}>{props.textHead}</Text>
                            <Text
                            style={{
                                fontWeight: 'bold',
                                color: 'blue',
                                textAlign: 'center',
                                fontSize: 20,
                            }}>
                            {props.score}
                            </Text>
                        </Card>
                    :
                    
                        <Card style={{borderRadius:10,padding:12}}>
                            <Icon name={props.icon ? `${props.icon}`:""} style={{textAlign: 'center'}} />
                            <Text style={{color: 'grey', textAlign: 'center'}}>{props.textHead}</Text>
                            <Text
                            style={{
                                fontWeight: 'bold',
                                color: 'blue',
                                textAlign: 'center',
                            }}>
                            {props.score}
                            </Text>
                        </Card>
                 }
                         
        </Card>
    )
}

export default CardContentProfile
