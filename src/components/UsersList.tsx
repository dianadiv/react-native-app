import React from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import { UsersContext } from '../../context/UsersContext';
import { ListItem } from './ListItem';
import { ErrorPage } from '../common/ErrorPage';
import { Wrapper } from './Wrapper';



export const UsersList: React.FC = () => {
    const { users, loading, error } = React.useContext(UsersContext);

    return (
        <Wrapper>
            {loading && <ActivityIndicator size="large" style={{ margin: 80 }}/>}
            {!loading && !error && <FlatList data={users} renderItem={({ item }) => <ListItem user={item} />} />} 
            {!loading && error && <ErrorPage /> }
        </Wrapper>
    );
};
