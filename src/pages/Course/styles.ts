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