import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Header = styled.div`
  width: 100%;
  height: 120px;
  background-color: #000;
  color: #fff;
`;

const LinkInner = styled.a`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  letter-spacing: 2px;
  transition: all 2s ease-out;
  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
  text-decoration: none;
  text-transform: uppercase;
`;

const ContentWrapper = styled.div`
  background-color: #181c20;
  height: auto;
  min-height: 80vh;
`;

const Content = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #000;
  color: #fff;
`;

const Describtion = styled.p``;

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <>
      <Header>
        <Nav>
          <Link href="/">
            <LinkInner>Blog</LinkInner>
          </Link>
          <Link href="/posts/new">
            <LinkInner>Create post</LinkInner>
          </Link>
        </Nav>
      </Header>
      <ContentWrapper>
        <Content>{props.children}</Content>
      </ContentWrapper>
      <Footer>
        <Nav>
          <Describtion>The Blog © 2020</Describtion>
        </Nav>
      </Footer>
    </>
  );
}
