import { useSelector } from 'react-redux';
import { Post } from '../../components/Post';

export default function SelectPost() {
  const { post } = useSelector((state) => state.post);

  return <Post {...post} post={true} />;
}
