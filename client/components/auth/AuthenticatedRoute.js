import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useAuthContext } from '@stores/AuthContext';

const AuthenticatedRoute =
  (Component = null, options = {}) =>
  ({ ...props }) => {
    const { authReady, isSignedIn } = useAuthContext();

    const [loading, setLoading] = useState(true);    
    
    useEffect(() => {
      if (authReady && isSignedIn) {
        setLoading(false);
      } else if (authReady && !isSignedIn){
        Router.push(options.pathAfterFailure || '/sign_in');
      }
      else {
        // Router.push(options.pathAfterFailure || '/sign_in');
      }
    }, [isSignedIn, authReady]);

    if (!authReady || loading) {
      return <div />;
    } else {
      return <Component {...props} />;
    }
    // return <Component {...props} />;
  };

export default AuthenticatedRoute;

// import { Component as component } from 'react';
// import Router from 'next/router';
// const authenticatedRoute = (Component = null, options = {}) => {
//   class AuthenticatedRoute extends component {
//     state = {
//       loading: true,
//     };

//     componentDidMount() {
//       // const isSignedIn = await myAuthenticationAPI.isLoggedIn();
//       const isSignedIn = true;

//       if (isSignedIn) {
//         this.setState({ loading: false });
//       } else {
//         Router.push(options.pathAfterFailure || '/sign_in');
//       }
//     }

//     render() {
//       const { loading } = this.state;

//       if (loading) {
//         return <div />;
//       }

//       return <Component {...this.props} />;
//     }
//   }

//   return AuthenticatedRoute;
// };

// export default authenticatedRoute;
