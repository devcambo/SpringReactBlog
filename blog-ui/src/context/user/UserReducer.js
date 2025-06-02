const userReducer = (state, action) => {
  switch (action.type) {
    case 'FIND_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'FIND_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'CREATE_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'UPDATE_USER':
      console.log('Updating user with payload:', action.payload);
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === action.payload.userId ? action.payload : user
        ),
      };
    case 'DELETE_USER':
      console.log(action.payload);
      return {
        ...state,
        users: state.users.filter((user) => user.userId !== action.payload),
      };
    case 'FIND_USER_PROFILE':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
