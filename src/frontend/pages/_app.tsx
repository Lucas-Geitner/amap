import React from 'react';
import App, { Container } from 'next/app';
import * as Sentry from '@sentry/browser';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from '../components/Header';
import SearchComponent from '../components/SearchComponent';
import withApolloClient from '../lib/with-apollo';

interface IInitialProp {
  Component: any;
  ctx: any;
}

Sentry.init({ dsn: 'https://e4540e6d14844cc0aa513131c07b80e0@sentry.io/1482486' });

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: IInitialProp) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <React.StrictMode>
            <div id="app" className="bg-gray-200 antialiased">
              <Header {...pageProps} />
              <SearchComponent {...pageProps} />
              <main className="px-4 py-6">
                <Component {...pageProps} />
              </main>
            </div>
          </React.StrictMode>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
