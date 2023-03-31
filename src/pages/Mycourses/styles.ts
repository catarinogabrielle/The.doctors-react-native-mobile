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
padding: 12px 12px;
background-color:${ColorTheme.Branco};
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
width: 92%;
`;

export const Card = styled.TouchableOpacity`  
display: flex;
width: 147px;
margin: 6px 0px 8px 0px;
background-color:${ColorTheme.Branco2};
border-radius: 8px;
height: 173px;
`;

export const Banner = styled.Image`                                    
width: 100%;
height: 100px;
object-fit: cover;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
margin-bottom: 10px;
`;

export const Label = styled.Text`                                    
color: ${ColorTheme.Cinza};
font-size: 12px;
font-weight: 300;
left: 6px;
margin-bottom: 5px;
`;

export const Text = styled.Text`                                    
color: ${ColorTheme.Preto};
font-size: 12px;
font-weight: 700;
left: 6px;
width: 95%;
`;