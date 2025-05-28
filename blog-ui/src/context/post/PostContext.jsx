import { createContext, useReducer } from 'react';
import postReducer from './PostReducer';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const initialState = {
    posts: [],
    post: null,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
