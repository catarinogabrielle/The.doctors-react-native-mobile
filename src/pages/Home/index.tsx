import React from "react";
import { Linking } from 'react-native';

import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Container, Header, Logo, Content, Card, Text } from './styles';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

var shadow = {
    elevation: 4,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
}

export default function Home() {
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
                    <Text>Meus Cursos</Text>
                </Card>

                <Card style={shadow}>
                    <MaterialIcons name="video-collection" size={35} color={ColorTheme.Cinza} />
                    <Text>Novos Cursos</Text>
                </Card>

                <Card style={shadow}>
                    <FontAwesome name="book" size={35} color={ColorTheme.Cinza} />
                    <Text>Materiais</Text>
                </Card>

                <Card onPress={() => Linking.openURL('https://thdacademy.com/myclasses')} style={shadow}>
                    <FontAwesome5 name="video" size={33} color={ColorTheme.Cinza} />
                    <Text>Gerenciar Cursos</Text>
                </Card>

                <Card onPress={() => Linking.openURL('https://thedoctorsagencia.com.br/')} style={shadow}>
                    <MaterialIcons name="info" size={35} color={ColorTheme.Cinza} />
                    <Text>Quem somos</Text>
                </Card>
            </Content>
        </Container>
    )
}