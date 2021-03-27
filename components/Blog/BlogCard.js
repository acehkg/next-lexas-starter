import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { ArrowRight } from 'react-feather';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1rem 0;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Description = styled.p``;
const BlogCard = ({ post }) => {
  return (
    <CardWrapper>
      <Image
        src={post.coverImage.url}
        width={1400}
        height={933}
        layout='responsive'
      />
      <Title>{post.title}</Title>
      <Description>{post.excerpt}</Description>
      <Link href={post.slug}>
        <LinkWrapper>
          <a>Read Post</a>
          <ArrowRight size={32} stroke={2} fill={'black'} />
        </LinkWrapper>
      </Link>
    </CardWrapper>
  );
};

export default BlogCard;
