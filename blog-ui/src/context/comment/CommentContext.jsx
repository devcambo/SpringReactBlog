import { createContext, useReducer } from 'react';
import commentReducer from './commentReducer';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const initialState = {
    comments: [],
  };

  const [state, dispatch] = useReducer(commentReducer, initialState);

  return (
    <CommentContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
