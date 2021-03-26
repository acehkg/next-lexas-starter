import GlobalStyles from '../style/GlobalStyles';
import Font from '../style/Font';
//Layout Components
import { navigationLinks } from '../config/configuration';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  const links = navigationLinks;
  return (
    <>
      <Font />
      <Header
        height={10 + 'rem'}
        background='inherit'
        sliderColor='lightgrey'
        logoSrc='/images/logo-example.png'
        logoHeight={402}
        logoWidth={402}
        links={links}
      />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
