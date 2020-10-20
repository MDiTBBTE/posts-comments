import { useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const InputWrapper = styled.div`
  &:nth-child(2) {
    margin-top: 20px;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 20px 0 20px;
  color: #fff;
  font-size: 32px;
`;

const Form = styled.div`
  margin-top: 50px;
`;

const Title = styled.h3`
  margin: 0;
  padding: 10px 0;
  font-size: 24px;
  color: #fff;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 50%;
  border-radius: 10px;
  height: 30px;
  padding-left: 10px;
  border-bottom: 1px solid #161c30;
`;

const Button = styled.button`
  text-transform: uppercase;
  border: none;
  background: #fff;
  border-radius: 10px;
  color: #000;
  padding: 4px 8px;
  font-size: 15px;
  margin-top: 40px;
  outline: none;
  cursor: pointer;
`;

export default function PostCreater(): JSX.Element {
  const [postFields, setPostFields] = useState({ title: '', body: '' });
  const handleChangeField = (e) => setPostFields({ ...postFields, [e.name]: e.value });

  const handlePost = () => {
    const { title, body } = postFields;
    title.length !== 0 && body.length !== 0
      ? axios
          .post('https://simple-blog-api.crew.red/posts', JSON.stringify(postFields), {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res) => {
            if (res.status === 201) {
              alert('You successfull added your post !');
              setPostFields({ title: '', body: '' });
            }
          })
      : alert('All fields must be filled');
  };

  return (
    <>
      <PageTitle>You can add your new post to the blog !</PageTitle>
      <Form>
        <InputWrapper>
          <Title>Write the title of your post</Title>
          <Input
            placeholder="Title"
            name="title"
            value={postFields.title}
            onChange={(e) => handleChangeField(e.target)}
          />
        </InputWrapper>
        <InputWrapper>
          <Title>Write the desciption for your post</Title>
          <Input
            placeholder="Desciption"
            name="body"
            value={postFields.body}
            onChange={(e) => handleChangeField(e.target)}
          />
        </InputWrapper>
        <Button onClick={handlePost}>Post</Button>
      </Form>
    </>
  );
}
