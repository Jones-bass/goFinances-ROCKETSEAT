import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface IconProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  margin-right: 16px;
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`;
export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(40)}px;

  ${( props ) => props.type === 'up' && css`
  color: ${({ theme }) => theme.colors.success};
`};

  ${( props ) => props.type === 'down' && css`
  color: ${({ theme }) => theme.colors.attention};
`};

  ${( props ) => props.type === 'total' && css`
  color: ${({ theme }) => theme.colors.text_dark};
  `};
`;

export const Footer = styled.View``;
export const Amount = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};
  margin-top: 38px;
`;

export const LastTrasaction = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
