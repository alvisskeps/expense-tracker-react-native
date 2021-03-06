import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Container, Body, Right, ListItem, Button} from 'native-base';
import Animated from 'react-native-reanimated';
import Card from './parts/Card';
import Empty from './parts/Empty';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionActions';

function Item({title, id, price}) {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        marginVertical: 3,
        paddingHorizontal: 30,
        paddingVertical: 15,
      }}>
      <ListItem>
        <Button
          light
          style={{
            color: '#fff',
            borderColor: '#fff',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            marginRight: 8
          }}
          onPress={() => {
            dispatch(deleteTransaction(id));
          }}>
          <FontAwesomeIcon icon={ faTrash } />
        </Button>

        <Body>
          <Text style={{fontSize: 17, fontWeight: '700', marginLeft: 10}}>
            {title}
          </Text>
        </Body>

        <Right>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              fontSize: 14,
              fontWeight: '400',
              color: price > 0 ? '#009BFC' : '#ff4500',
            }}>
            {price > 0 ? `€${price}` : `- €${Math.abs(price)}`}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
}

const HomeScreen = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);

  return (
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card navigation={navigation} />
      </Animated.View>

      <View style={{flex: 1, marginTop: -150}}>
        {transactions.length > 0 ? (
          <FlatList
            data={transactions}
            renderItem={({item}) => (
              <Item title={item.title} price={item.price} id={item.id} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Empty />
        )}
      </View>
    </Container>
  );
};

export default HomeScreen;
