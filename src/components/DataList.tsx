import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import { DataItem } from './DataItem';
import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';

type Props = {
  title: string;
  data: Comment[] | Post[];
};

export const DataList: React.FC<Props> = ({ title, data }) => {
  return (
    <DataView>
      <TextStyled>{title}</TextStyled>
      <FlatList<Comment | Post>
        data={data}
        renderItem={({ item }) => <DataItem item={item} />}
        keyExtractor={(item: Comment | Post) => String(item.id)}
      />
    </DataView>
  );
};

const TextStyled = styled.Text`
  color: white;
  text-align: center;
  font-size: 23px;
`;

const DataView = styled.View`
  margin: 10px;
  height: 80%;
`;
