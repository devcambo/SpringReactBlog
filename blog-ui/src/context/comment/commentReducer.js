const commentReducer = (state, action) => {
  switch (action.type) {
    case 'FIND_COMMENTS':
      return {
        ...state,
        comments: action.payload,
      };
    case 'CREATE_COMMENT':
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};

export default commentReducer;
