import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content, Form, Item, Input} from 'native-base';

function AddTransaction() {
    return (
        <Container>
            <Content>
                <Form>
                    <Item style={{...styles.item}}>
                        <Input placeholder="Expense title"/>
                    </Item>
                    <Item style={{...styles.item}}>
                        <Input placeholder="Expense price" keyboardType="number-pad"/>
                    </Item>
                </Form>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 20,
    }
});

export default AddTransaction;
