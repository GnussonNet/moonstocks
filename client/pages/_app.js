import Router from 'next/router';
import '@styles/main.scss';

// NProgress
import NProgress from 'nprogress';
import '@styles/modules/components/NProgress.scss';

// NProgress config
NProgress.configure({ showSpinner: false });

// Start on route change
Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

// Stop on complete or error
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
