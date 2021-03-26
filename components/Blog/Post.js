import SEO from '../Seo';
import Link from 'next/link';
import Image from 'next/image';
import Markdown from 'react-markdown';
import Moment from 'react-moment';
import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const ByLine = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 1.25rem;
  padding-bottom: 1rem;
`;
const Author = styled.p`
  padding-left: 1rem;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 1rem;
  margin-left: -0.5rem;
`;
const Post = ({ post }) => {
  return (
    <>
      <SEO post={post} />
      <Wrapper>
        <ImageWrapper>
          <Image
            src={post.coverImage.url}
            width={1400}
            height={933}
            layout='responsive'
          />
        </ImageWrapper>
        <Title>{post.title}</Title>
        <ByLine>
          <Moment format='MMMM D, YYYY'>{post.publishedAt}</Moment>
          <Author>By:{post.author.name}</Author>
        </ByLine>
        <Markdown source={post.mainContent} />
        <Link href='/'>
          <LinkWrapper>
            <ArrowLeft size={32} stroke={2} fill={'black'} />
            <a>All Posts</a>
          </LinkWrapper>
        </Link>
      </Wrapper>
    </>
  );
};

export default Post;
