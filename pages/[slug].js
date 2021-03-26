import Post from '../components/Blog/Post';

import { request } from '../utils/lexacms';

const Page = ({ post }) => {
  return <Post post={post} />;
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
