import React, { useState, useContext } from "react";
import { Linking, ActivityIndicator } from 'react-native';

import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/AuthContext';

import { Container, Logo, InputContainer, Input, ContainerButton, Button, ButtonText, ContainerSignUp, ButtonSignUp, TextSignUp, TextUnderline } from './styles';

export default function SignIn() {
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {

        if (email === '' || password === '') {
            return;
        }

        await signIn({ email, password })
    }

    return (
        <Container>
            <Logo
                source={require('../../assets/logo.png')}
            />

            <InputContainer>
                <Input
                    placeholder="Digite seu email"
                    placeholderTextColor={ColorTheme.Preto}
                    value={email}
                    onChangeText={setEmail}
                />

                <Input
                    placeholder="Sua senha"
                    secureTextEntry={true}
                    placeholderTextColor={ColorTheme.Preto}
                    value={password}
                    onChangeText={setPassword}
                />
                <ContainerButton>
                    <ButtonText>Acessar</ButtonText>
                    {loadingAuth ? (
                        <Button >
                            <ActivityIndicator size={20} color={ColorTheme.Branco} />
                        </Button>
                    ) : (
                        <Button onPress={handleLogin}>
                            <Feather name="arrow-right" size={20} color={ColorTheme.Branco} />
                        </Button>
                    )}
                </ContainerButton>

                <ContainerSignUp>
                    <ButtonSignUp onPress={() => Linking.openURL('https://thdacademy.com/signup')}>
                        <TextSignUp>Não possui uma conta? <TextUnderline>Cadastre-se</TextUnderline></TextSignUp>
                    </ButtonSignUp>
                </ContainerSignUp>
            </InputContainer>
        </Container>
    )
}