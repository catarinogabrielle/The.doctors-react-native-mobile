import styled from 'styled-components';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`                                    
flex: 1;
align-items: center;
background-color: ${ColorTheme.Branco};
`;

export const Content = styled.View` 
margin-top: 20px;
width: 93%;
`;

export const Title = styled.Text`                                    
color: ${ColorTheme.Preto};
font-size: 17px;
font-weight: 400;
left: 5px;
margin-bottom: 5px;
`;

export const BoxVideo = styled.View`
align-items: center;
margin-bottom: 12px;
margin-top: 8px
`;

export const BoxDescription = styled.View`
border-top-color: ${ColorTheme.Branco2};
border-top-width: 1px;
padding: 5px 0 0 0 ;
`;

export const Description = styled.Text`                                    
color: ${ColorTheme.Preto};
font-size: 13px;
font-weight: 200;
left: 5px;
width: 97%
`;

export const BoxMaterial = styled.TouchableOpacity`
background-color: ${ColorTheme.Branco2};
weight: 100%;
margin-top: 23px;
padding: 10px;
border-radius: 8px;
flex-direction: row;
align-items: center;
`;

export const TitleMaterial = styled.Text`                                    
color: ${ColorTheme.Preto};
font-size: 15px;
font-weight: 300;
left: 8px;
width: 90%;
`;