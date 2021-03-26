import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Markdown from 'react-markdown';
import Moment from 'react-moment';
import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';

import { request } from '../utils/lexacms';

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
const Page = ({ post }) => {
  return (
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
  );
};

export default Page;
export const blogPostsQuery = `
  query {
    blogPostCollection(limit: 100) {
      items {
        slug
      }
    }
  }
`;

export const blogPostQuery = `
  query BlogPostById($postSlug: String!) {
    blogPostCollection(filter: {
      slug: { _eq: $postSlug }
    }) {
      items {
        title
        publishedAt
        coverImage {
          url
        }
        author {
          name
        }
        excerpt
        mainContent
      }
    }
  }
`;

export async function getStaticPaths() {
  // Get blog posts
  const result = await request({ query: blogPostsQuery });
  // Generate paths for pages
  const paths = result.blogPostCollection.items.map((blogPost) => ({
    params: { slug: blogPost.slug },
  }));
  // Return paths
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch blog post from LexasCMS
  const result = await request({
    query: blogPostQuery,
    variables: { postSlug: params.slug },
  });
  // Return props
  return {
    props: {
      post: result.blogPostCollection.items[0],
    },
  };
}
