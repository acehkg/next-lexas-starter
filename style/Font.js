//Global Font Workaround
import Head from 'next/head';

const Font = () => {
  return (
    <Head>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
      </style>
    </Head>
  );
};

export default Font;
