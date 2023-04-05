import React from "react";
import { Linking } from 'react-native';

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
    function novaAba() {
        Linking.openURL(`https://thdacademy.com:8443/files/5cf59551bfafb3afe2cc0075d9217163-Fluxo%20pacote%20de%20m%C3%83%C2%ADdia%20-%20Fluxo%20de%20processos%20(1).pdf`)
    }

    return (
        <Container>
            <Content>
                <Card onPress={() => novaAba()} style={shadow}>
                    <FontAwesome5 name="download" size={22} color={ColorTheme.Cinza} />
                    <Text numberOfLines={1}>Nome da aula aqui</Text>
                </Card>
            </Content>
        </Container>
    )
}