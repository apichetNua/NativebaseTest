import React from 'react'
import { Container, Header, Right,Button ,Card,Badge,CardItem, Thumbnail,Text,Icon, Content} from 'native-base';
function HeadeProfile() {
    return (
        
        <Content>
            <Header transparent>
                <Right>
                  <Button transparent >
                        <Icon name="settings-outline" />
                    </Button>
                    </Right>
                </Header>
                <Card transparent style={{alignItems: 'center',marginTop:-50}}>
                    <CardItem>
                        <Thumbnail style={{width: 100, height: 100}} source={{uri: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'}} />
                    </CardItem>
                    <Text style={{fontWeight: 'bold'}}>Name Surname</Text>
                    <Text style={{textAlign: 'center'}}>Position</Text>
                    <Card transparent>
                        <CardItem transparent>
                        <Badge style={{backgroundColor: 'red'}}>
                            <Text>LV</Text>
                        </Badge>
                        <Text style={{fontWeight: 'bold'}}> Level 5</Text>
                        </CardItem>
                    </Card>
                    </Card>
            </Content>
        
    )
}

export default HeadeProfile
