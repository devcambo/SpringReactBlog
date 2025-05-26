const postReducer = (state, action) => {
  switch (action.type) {
    case 'FIND_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'FIND_POST':
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
