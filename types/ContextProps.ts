import { Comment } from './Comment';
import { Post } from './Post';
import { User } from './User';

export interface ContextProps {
  users: User[];
  posts: Post[];
  comments: Comment[];
  loading: boolean;
  error: boolean;
  selectedUser: User | {};
  setSelectedUser: (v: number) => void;
  loadUserInfo: (v: number) => void;
  loadPostInfo: (v: number) => void;
  selectedPost: Post | {};
}
