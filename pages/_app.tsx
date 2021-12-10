import Head from 'next/head';
import App, { AppContext, AppInitialProps } from 'next/app';
import { wrapper } from '../redux/redux.store';

export class AppComponent extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: { ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}) },
      appProp: ctx.pathname,
    }
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>ETNA DAO</title>
          <link rel="icon" type="image/png" href="/image/logo.png"/>
          <link rel="stylesheet" href="/css/reset.css"/>
        </Head>
        <Component {...pageProps}/>
      </>
    )
  }
}

export default wrapper.withRedux(AppComponent);