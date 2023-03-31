import React from "react";

import { FontAwesome5 } from '@expo/vector-icons';
import { Container, Content, Card, Text } from './styles';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

var shadow = {
    elevation: 4,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
}

export default function Material() {
    return (
        <Container>
            <Content>
                <Card style={shadow}>
                    <FontAwesome5 name="download" size={22} color={ColorTheme.Cinza} />
                    <Text numberOfLines={1}>Nome da aula aqui</Text>
                </Card>

                <Card style={shadow}>
                    <FontAwesome5 name="download" size={22} color={ColorTheme.Cinza} />
                    <Text numberOfLines={1}>Nome da aula aqui</Text>
                </Card>

                <Card style={shadow}>
                    <FontAwesome5 name="download" size={22} color={ColorTheme.Cinza} />
                    <Text numberOfLines={1}>Nome da aula aqui</Text>
                </Card>

                <Card style={shadow}>
                    <FontAwesome5 name="download" size={22} color={ColorTheme.Cinza} />
                    <Text numberOfLines={1}>Nome da aula aqui</Text>
                </Card>

                <Card style={shadow}>
                    <FontAwesome5 name="download" size={22} color={ColorTheme.Cinza} />
                    <Text numberOfLines={1}>Nome da aula aqui</Text>
                </Card>
            </Content>
        </Container>
    )
}