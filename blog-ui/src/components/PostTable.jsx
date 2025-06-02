import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import PostContext from '../context/post/PostContext';
import { findAllPosts } from '../context/post/PostActions';
import UpdatePostModal from './UpdatePostModal';
import { Link } from 'react-router-dom';
import DeletePostModal from './DeletePostModal';

const PostTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const { posts, dispatch } = useContext(PostContext);

  const fetchPosts = async () => {
    const posts = await findAllPosts();
    dispatch({ type: 'FIND_POSTS', payload: posts });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Table responsive='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Content</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Publication Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr key={post.postId}>
                <td>{post.postId}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>{post.category}</td>
                <td>{post.tags}</td>
                <td>{post.publicationDate}</td>
                <td>
                  <Link
                    className='btn-sm btn btn-primary'
                    target='_blank'
                    to={`/posts/${post.postId}`}
                  >
                    View
                  </Link>
                  <button
                    className='btn-sm btn btn-warning ms-2'
                    onClick={() => {
                      setShowModal(true);
                      setSelectedPost(post.postId);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className='btn-sm btn btn-danger ms-2'
                    onClick={() => {
                      setShowDeleteModal(true);
                      setSelectedPost(post.postId);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <UpdatePostModal
        show={showModal}
        onHide={() => setShowModal(false)}
        id={selectedPost}
      />
      <DeletePostModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        id={selectedPost}
      />
    </>
  );
};

export default PostTable;
