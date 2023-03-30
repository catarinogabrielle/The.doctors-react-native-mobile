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
padding: 12px 0;
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
width: 90%;
padding: 12px 0;
background-color:${ColorTheme.Branco};
flex-direction: row;
flex-wrap: wrap;
`;

export const Card = styled.TouchableOpacity`                                    
align-items: center;
margin-top: 12px;
margin-right: 12px;
display: flex;
width: 100%;
height: 105px;
background-color:${ColorTheme.Branco2};
align-items: center;
justify-content: center;
`;