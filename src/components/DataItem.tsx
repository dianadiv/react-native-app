import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Post } from '../../types/Post';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation';
import { Comment } from '../../types/Comment';

type Props = {
  item: Post | Comment;
};

export const DataItem: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handlePress = () => {
    'title' in item && navigation.navigate('PostDetails', { id: item.id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <ViewStyled>
        <TitleStyled>{'title' in item ? item.title : item.name}</TitleStyled>
        <TextStyled numberOfLines={2}>{item.body}</TextStyled>
      </ViewStyled>
    </TouchableOpacity>
  );
};

const ViewStyled = styled.View`
  backgroundcolor: #4d34a7;
  margin-vertical: 10px;
  border-radius: 10px;
`;

const TitleStyled = styled.Text`
  font-size: 18px;
  padding: 5px;

  color: black;
  background-color: #808080;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TextStyled = styled.Text`
  font-size: 18px;
  padding: 5px;

  color: white;
`;
