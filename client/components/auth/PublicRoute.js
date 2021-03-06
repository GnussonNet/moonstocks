import { Component as component } from 'react';
import Router from 'next/router';

const authenticatedRoute = (Component = null, options = {}) => {
  class AuthenticatedRoute extends component {
    state = {
      loading: true,
    };

    componentDidMount() {
      // const isSignedIn = await myAuthenticationAPI.isLoggedIn();
      const isSignedIn = false;

      if (!isSignedIn) {
        this.setState({ loading: false });
      } else {
        Router.push(options.pathAfterFailure || '/app');
      }
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <div />;
      }

      return <Component {...this.props} />
    }
  }

  return AuthenticatedRoute;
};

export default authenticatedRoute;