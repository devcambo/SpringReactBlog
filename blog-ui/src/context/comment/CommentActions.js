import apiClient from '../../api/apiClient';

// findAllComments -> /comments?postId={postId}
export const findAllComments = async (postId) => {
  try {
    const response = await apiClient.get(`/comments?postId=${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

// findCommentById
// createComment
export const createComment = async (commentData) => {
  try {
    const response = await apiClient.post('/comments', commentData);
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};

// updateComment
// deleteComment
