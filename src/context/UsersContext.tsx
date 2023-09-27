import React, { createContext, useCallback, useEffect, useState } from 'react';
import { User } from '../../types/User';
import { getAllPosts, getComments, getCurrentPost, getUserInfo, getUsers } from '../api/api';
import { Post } from '../../types/Post';
import { ContextProps } from '../../types/ContextProps';
import { Comment } from '../../types/Comment';

export const UsersContext = createContext<ContextProps>({
    users: [],
    posts: [],
    loading: true,
    error: false,
    selectedUser: {},
    setSelectedUser: () => {},
    loadUserInfo: () => {},
    loadPostInfo: () => {},
    selectedPost:  {},
    comments: [],
});

type Props = {
  children: JSX.Element;
};

export const UsersProvider: React.FC<Props> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | {}>({});

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | {}>({});

    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data))
            .catch(error => setError(true))
            .finally(() => setLoading(false));
    }, []);

    const loadUserInfo = useCallback((id: number) => {
        setLoading(true);
        getUserInfo(id)
            .then(data => setSelectedUser(data))
            .catch(error => setError(true));

        getAllPosts(id)
            .then(data => setPosts(data))
            .catch(error => setError(true))
            .finally(() => setLoading(false));
        
    }, [selectedUser])

    const loadPostInfo = useCallback((id: number) => {
        setLoading(true);
        getCurrentPost(id)
            .then(data => setSelectedPost(data))
            .catch(error => setError(true))
            .finally(() => setLoading(false));

        getComments(id)
            .then(data => setComments(data))
            .catch(error => setError(true));
    }, [selectedUser])

    const contextValue = {
        users,
        posts,
        loading,
        error,
        selectedUser,
        setSelectedUser,
        loadUserInfo,
        loadPostInfo,
        selectedPost,
        comments,
    } 

  return (
    <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>
  );
};