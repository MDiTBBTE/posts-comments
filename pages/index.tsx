import { useEffect } from 'react';
import { fetchPosts } from '../store/actions/postsAction';
import { fetchPost } from '../store/actions/postAction';
import { fetchForDeletePost } from '../store/actions/deletePostAction';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import { Post } from '../components/Post';

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
`;

export default function Home(): JSX.Element {
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);

  const handleChoosePost = (id: number) => dispatch(fetchPost(id));
  const handleDeletePost = (id: number) => dispatch(fetchForDeletePost(id));

  return (
    <ContentWrapper>
      {posts &&
        posts.map((post, idx: number) => (
          <Post
            key={post.title + idx}
            {...post}
            handleChoosePost={handleChoosePost}
            handleDeletePost={handleDeletePost}
          />
        ))}
    </ContentWrapper>
  );
}
