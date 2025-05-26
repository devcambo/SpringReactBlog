import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        src='https://pppkhmer.sgp1.digitaloceanspaces.com/image/main/20255/26_5_2025_a1513.jpg'
      />
      <Card.Body>
        <Card.Title className='koh-santepheap-regular'>{post.title}</Card.Title>
        <Card.Text className='koh-santepheap-light'>
          {post.content.length > 200
            ? `${post.content.substring(0, 200)}...`
            : post.content}
        </Card.Text>
        <Link
          className='btn btn-primary'
          role='button'
          to={`/posts/${post.postId}`}
        >
          Read More ...
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
