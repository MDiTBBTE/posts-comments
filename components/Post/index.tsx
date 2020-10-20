import styled from 'styled-components';
import Link from 'next/link';

interface IPost {
  id: number;
  title: string;
  body: string;
  handleChoosePost: () => void;
  handleDeletePost: () => void;
  post: boolean;
}

const PostWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.post === true ? '80%' : '30%')};
  margin: ${(props) => (props.post === true ? '0 auto' : 'none')};
  min-height: 200px;
  background-color: ${(props) => (props.post === true ? 'none' : '#f3f3f3')};
  margin-bottom: ${(props) => (props.post === true ? '0' : '15px')};
  padding: 5px 10px;
  border-radius: 10px;
  color: ${(props) => (props.post === true ? '#fff' : '#000')};
`;

const Title = styled.h3`
  font-size: ${(props) => (props.post === true ? '44px' : '16px')};
  font-style: ${(props) => (props.post === true ? 'italic' : 'none')};
  cursor: pointer;
`;

const Describtion = styled.p`
  font-size: ${(props) => (props.post === true ? '22px' : '14px')};
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  background-color: none;
  cursor: pointer;
`;

export const Post: React.SFC<IPost> = ({
  title,
  body,
  id,
  handleChoosePost,
  handleDeletePost,
  post,
}) => {
  return (
    <PostWrapper post={post}>
      {post !== true && <DeleteBtn onClick={() => handleDeletePost(id)}>X</DeleteBtn>}
      <Link href={`posts/${id}`}>
        <Title post={post} onClick={() => handleChoosePost(id)}>
          {title}
        </Title>
      </Link>
      <Describtion post={post}>{body}</Describtion>
    </PostWrapper>
  );
};
