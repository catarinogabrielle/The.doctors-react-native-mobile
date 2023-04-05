import React from "react";
import { useNavigation } from '@react-navigation/native'

import { Container, Content, Card, Banner, Label, Text } from './styles';

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes'

var shadow = {
    elevation: 4,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
}

export default function Mycourses() {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    return (
        <Container>
            <Content>
                <Card onPress={() => navigation.navigate('Course')} style={shadow}>
                    <Banner source={require('../../assets/banner.jpg')} />
                    <Label>Curso</Label>
                    <Text numberOfLines={2}>Curso de javascript iniciante</Text>
                </Card>
            </Content>
        </Container>
    )
}