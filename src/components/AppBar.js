import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const AppBar = () => {
  const isAunthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className="navContainer">
      <Navigation />
      {isAunthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
