import React, { useEffect  } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styled from "styled-components/native";
import { UsersContext } from '../../context/UsersContext';
import { useRoute } from '@react-navigation/native';
import { UserPosts } from './UserPosts';
import { ErrorPage } from '../common/ErrorPage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Wrapper } from './Wrapper';

type UserDetailsRouteParams = {
    id: number;
};

export const UserDetails: React.FC = () => {
    const route = useRoute();
    const { id } = route.params as UserDetailsRouteParams;
    
    const { loading, error, selectedUser, loadUserInfo } = React.useContext(UsersContext);

    useEffect(() => loadUserInfo(id), [])
    
    return (
        <Wrapper>
            {loading && <ActivityIndicator size="large" style={{ margin: 80 }}/>}

            {!loading && error && <ErrorPage />}

            {!loading && !error && selectedUser && 'name' in selectedUser && (
                <View>
                    <TextBlock>
                        <TexStyled><Icon name="user" size={20} color="#fff" /> {selectedUser.name}</TexStyled>
                        <TexStyled><Icon name="envelope" size={20} color="#fff" /> {selectedUser.email}</TexStyled>
                        <TexStyled><Icon name="phone" size={20} color="#fff" /> {selectedUser.phone}</TexStyled>
                        <TexStyled><Icon name="globe" size={20} color="#fff" /> {selectedUser.website}</TexStyled>
                        <TexStyled><Icon name="compass" size={20} color="#fff" /> {selectedUser.company.name}</TexStyled>
                    </TextBlock>

                    <UserPosts/>
                </View>
            )}
        </Wrapper>
    );
};

const TextBlock = styled.View`
  display: flex;
  flex-direction: column;
  align-self: left;

  margin: 10px;
`;

const TexStyled = styled.Text`
color: white;
font-size: 20px;
`;

