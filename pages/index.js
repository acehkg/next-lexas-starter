import { request } from '../utils/lexacms';

import GridContainer from '../components/Layout/GridContainer';
import BlogCard from '../components/Blog/BlogCard';
import FeatureCard from '../components/Blog/FeatureCard';
import SignUpBar from '../components/Forms/SignUpBar';

const FeaturedPost = ({ posts }) => {
  return <FeatureCard post={posts.items[0]} />;
};
const NewPosts = ({ posts }) => {
  const remaining = posts.items.slice(1);
  return (
    <>
      <GridContainer>
        {remaining.map((item) => {
          return <BlogCard key={item.id} post={item} />;
        })}
      </GridContainer>
    </>
  );
};
const HomePage = ({ blogPosts }) => {
  return (
    <>
      <SignUpBar />
      <FeaturedPost posts={blogPosts} />
      <NewPosts posts={blogPosts} />
    </>
  );
};

export default HomePage;

export const blogPostsQuery = `
  query {
    blogPostCollection(
      limit: 10,
      order: [ publishedAt_DESC ]
    ) {
      total
      items {
        id
        author{
          name
        }
        slug
        title
        publishedAt
        coverImage {
          url
        }
        excerpt
      }
    }
  }
`;
export async function getStaticProps() {
  // Fetch blog posts from LexasCMS
  const result = await request({ query: blogPostsQuery });
  // Return props
  return {
    props: {
      blogPosts: result.blogPostCollection,
    },
  };
}
