import Head from 'next/head';

const SEO = ({ post }) => {
  return (
    <Head>
      <title>{post.title}</title>
      <meta name='description' content={post.excerpt} />
      <meta property='og:type' content='website' />
      <meta name='og:title' property='og:title' content={post.title} />
      <meta
        name='og:description'
        property='og:description'
        content={post.excerpt}
      />
      <meta property='og:site_name' content='' />
      <meta property='og:url' content='' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={post.title} />
      <meta name='twitter:description' content={post.excerpt} />
      <meta name='twitter:site' content='' />
      <meta name='twitter:creator' content='' />
      <meta property='og:image' content={post.coverImage.url} />
      <meta name='twitter:image' content={post.coverImage.url} />
    </Head>
  );
};

export default SEO;
