import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';

import styled from 'styled-components/native';

import { ViewCircle } from '../common/ViewCircle';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserItem: React.FC<Props> = ({ user }) => {
  const { id, name, email } = user;

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handlePress = () => {
    navigation.navigate('UserDetails', { id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <ViewStyled>
        <ViewCircle />

        <TextBlock>
          <TextStyled>{name}</TextStyled>
          <TextStyled>{email}</TextStyled>
        </TextBlock>
      </ViewStyled>
    </TouchableOpacity>
  );
};

const ViewStyled = styled.View`
  margin: 10px;
  padding: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #4d34a7;
  border-radius: 10px;
`;

const TextBlock = styled.View`
  display: flex;
  flex-direction: column;
  align-self: center;

  margin-left: 10px;
`;

const TextStyled = styled.Text`
  color: #fff;
  font-size: 20px;
`;
