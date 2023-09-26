import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native"
import styled from "styled-components/native";
import { UsersContext } from "../../context/UsersContext";
import React from "react";
import { ViewCircle } from "../common/ViewCircle";
import { Wrapper } from "./Wrapper";

type PostDetailsRouteParams = {
    id: number;
  };

export const PostDetails: React.FC = () => {
    const route = useRoute();
    const { id } = route.params as PostDetailsRouteParams;

    const { selectedUser, selectedPost, loadPostInfo, loading } = React.useContext(UsersContext);

    useEffect(() => {
      loadPostInfo(id);
    }, [])
    
    return (
      <Wrapper>
        {loading && <ActivityIndicator size="large" style={{ margin: 80 }}/>}

        {!loading && selectedPost && selectedUser && 'name' in selectedUser && 'title' in selectedPost && (
          <ViewPost>
            <ViewUser>
              <ViewCircle />
              <View>
                <TextStyled>{selectedUser.name}</TextStyled>
                <TextStyled>{selectedUser.email}</TextStyled>
              </View>
            </ViewUser>

            <View>
              <TextStyled>{selectedPost.title}</TextStyled>
              <TextStyled>{selectedPost.body}</TextStyled>
            </View>
          </ViewPost>
        )}
      </Wrapper>
    )
  }

const TextStyled = styled.Text`
  color: white;
  font-size: 20px;
  padding-left: 10px;
`;

const ViewUser = styled.View`
display: flex;
flex-direction: row;

margin-bottom: 10px;
padding-left: 10px;
`;

const ViewPost = styled.View`
margin: 10px;
padding: 10px;

backgroundColor: #4d34a7;
border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: left;
`;