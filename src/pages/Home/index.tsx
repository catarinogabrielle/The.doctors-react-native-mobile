import React, { useContext } from "react";
import { Linking } from 'react-native';

import { FontAwesome, MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Container, Header, ContentLogo, Logo, Exit, Content, Card, Text } from './styles';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

import { AuthContext } from '../../contexts/AuthContext';

var shadow = {
    elevation: 4,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
}

export default function Home() {
    const { signOut } = useContext(AuthContext);

    return (
        <Container>
            <Header style={shadow}>
                <ContentLogo>
                    <Logo
                        source={require('../../assets/logo.png')}
                    />
                </ContentLogo>
                <Exit onPress={signOut} >
                    <Ionicons name="ios-exit" size={27} color={ColorTheme.Cinza} />
                </Exit>
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