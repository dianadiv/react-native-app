import { FlatList } from "react-native";
import styled from "styled-components/native";
import { UsersContext } from "../../context/UsersContext";
import React from "react";
import { PostItem } from "./PostItem";


export const UserPosts: React.FC = () => {
  const { selectedUser, posts } = React.useContext(UsersContext);

  return (
    selectedUser && 'name' in selectedUser && (
      <PostsView>
        <TextStyled>{`${selectedUser.name} posts`}</TextStyled>
        <FlatList data={posts} renderItem={({ item }) => <PostItem post={item} />} />
      </PostsView>
    )
  )
}

const TextStyled = styled.Text`
  color: white;
  text-align: center;
  font-size: 23px;
`;

const PostsView = styled.View`
  margin: 10px;
  height: 80%;
`;
