import styled from 'styled-components';
import Colors from '../../../constants/Colors';
const ColorTheme = Colors['Theme'];

export const Container = styled.View`                                    
flex: 1;
align-items: center;
background-color: ${ColorTheme.Branco};
`;

export const Header = styled.View`                                    
align-items: center;
display: flex;
width: 100%;
padding: 13px 0;
background-color:${ColorTheme.Branco};
`;

export const Logo = styled.Image`
width: 130px;
height: 36px;
`;

export const Content = styled.View`                                    
align-items: center;
margin-top: 5px;
flex: 1;
padding: 12px 12px;
background-color:${ColorTheme.Branco};
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
width: 90%;
`;

export const Card = styled.TouchableOpacity`                                    
align-items: center;
display: flex;
width: 143px;
margin: 6px 0px 6px 0px;
height: 115px;
background-color:${ColorTheme.Branco2};
align-items: center;
justify-content: center;
`;

export const Text = styled.Text`                                    
color: ${ColorTheme.Cinza};
font-size: 12px;
font-weight: 200;
`;