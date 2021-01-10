import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {Button, Container, CheckBox, Body, Right} from 'native-base'
import Animated from 'react-native-reanimated'

function HomeScreen({navigation}) {
  return (
    <Container>
      <Animated.View style = {{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
      }}>
        <LinearGradient
          colors={['#FAAD3D', '#EFC90A', '#F1CB0C']}
          style={styles.Box}>
          <View style={{width: '70%', alignItems: 'flex-start'}}>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                fontFamily: 'Lato-Regular',
                fontWeight: '700',
              }}>
              Income
            </Text>
            <Text
              style={{
                fontFamily: 'Lato-Medium',
                fontSize: 32,
                color: '#fff',
                fontWeight: '700',
              }}>
              $ 32
            </Text>

            <Text
              style={{
                marginTop: 67,
                color: '#fff',
                fontFamily: 'Lato-Regular',
                fontSize: 18,
                fontWeight: '700',
              }}>
              4234 **** **** 6533
            </Text>
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              width: '30%',
            }}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
              NGN
            </Text>
            <View style={{flex: 1}}>
              <Button
                rounded
                light
                style={{
                  padding: 10,
                  marginTop: 32,
                  borderWidth: 3,
                  borderColor: '#fff',
                  backgroundColor: '#E10C62',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('Add');
                }}>
                <Text style={{color: '#fff', fontWeight: '700', fontSize: 15}}>
                  Add
                </Text>
              </Button>

              <Text
                style={{
                  marginTop: 17,
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: '700',
                }}>
                  Expense
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: '700',
                }}>
                -$ 10
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
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
