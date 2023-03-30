import React from "react";

import { FontAwesome } from '@expo/vector-icons';
import { Container, Header, Logo, Content, Card } from './styles';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

var shadow = {
    elevation: 4,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
}

export default function Mycourses() {
    return (
        <Container>
            <Header style={shadow}>
                <Logo
                    source={require('../../assets/logo.png')}
                />
            </Header>

            <Content>
                <Card style={shadow}>
                    <FontAwesome name="user" size={35} color={ColorTheme.Cinza} />
                </Card>

                <Card style={shadow}>
                    <FontAwesome name="user" size={35} color={ColorTheme.Cinza} />
                </Card>
            </Content>
        </Container>
    )
}