import styled from 'styled-components';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`                                    
flex: 1;
align-items: center;
background-color: ${ColorTheme.Branco};
`;

export const Content = styled.View`                                    
align-items: center;
margin-top: 5px;
flex: 1;
width: 90%;
padding: 12px 0;
background-color:${ColorTheme.Branco};
`;

export const Card = styled.TouchableOpacity`                                    
align-items: flex-start;
margin-top: 12px;
margin-bottom: 3px;
display: flex;
width: 100%;
background-color:${ColorTheme.Branco2};
padding: 15px;
flex-direction: row;
border-radius: 8px
`;

export const Text = styled.Text`                                    
color: ${ColorTheme.Cinza};
font-size: 16px;
font-weight: 300;
top: 3px;
left: 12px;
width: 85%;
`;