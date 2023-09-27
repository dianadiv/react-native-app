import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { UsersContext } from '../context/UsersContext';
import { UserItem } from './UserItem';
import { ErrorPage } from '../common/ErrorPage';
import { Wrapper } from '../common/Wrapper';

export const UsersList: React.FC = () => {
  const { users, loading, error } = React.useContext(UsersContext);

  return (
    <Wrapper>
      {loading && <ActivityIndicator size="large" style={{ margin: 80 }} />}
      {!loading && !error && (
        <FlatList data={users} renderItem={({ item }) => <UserItem user={item} />} />
      )}
      {!loading && error && <ErrorPage />}
    </Wrapper>
  );
};
