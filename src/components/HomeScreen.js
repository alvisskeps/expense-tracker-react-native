import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Container, CheckBox, Body, Right, ListItem} from 'native-base';
import Animated from 'react-native-reanimated';
import Card from './parts/Card';
import Empty from './parts/Empty';
import {useSelector} from 'react-redux';

function Item({title, id, price}) {

  return (
    <View
      style={{
        marginVertical: 3,
        paddingHorizontal: 30,
        paddingVertical: 15,
      }}>
      <ListItem>
        <CheckBox
          color="#ff4500"
        />

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
      <Animated.View style = {{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
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

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  }
});

export default HomeScreen;
