import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { Linking } from 'react-native';

import { Container, Content, Title, BoxVideo, BoxDescription, Description, BoxMaterial, TitleMaterial } from './styles';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

var shadow = {
    elevation: 4,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
}

export default function Course() {
    function novaAba() {
        Linking.openURL(`https://thdacademy.com:8443/files/5cf59551bfafb3afe2cc0075d9217163-Fluxo%20pacote%20de%20m%C3%83%C2%ADdia%20-%20Fluxo%20de%20processos%20(1).pdf`)
    }

    return (
        <Container>
            <Content>
                <Title>Aula 1</Title>

                <BoxVideo>
                    <AntDesign style={{ position: 'absolute', top: 80 }} name="play" size={50} color={ColorTheme.Verde} />
                    <YoutubePlayer
                        height={195}
                        width={334}
                        videoId={"YfR0wDSSlFE"}
                    />
                </BoxVideo>

                <BoxDescription>
                    <Title>Descrição</Title>
                    <Description>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in</Description>
                </BoxDescription>

                <BoxMaterial onPress={() => novaAba()} style={shadow}>
                    <FontAwesome5 name="download" size={15} color={ColorTheme.Cinza} />
                    <TitleMaterial numberOfLines={1}>Material da aula 1</TitleMaterial>
                </BoxMaterial>
            </Content>
        </Container>
    )
}