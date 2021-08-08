import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};

export default PrivateRoute;
