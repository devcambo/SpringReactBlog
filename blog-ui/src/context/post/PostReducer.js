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
    case 'CREATE_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.postId === action.payload.postId ? action.payload : post
        ),
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.postId !== action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;
