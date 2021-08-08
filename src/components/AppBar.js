import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const AppBar = ({ isAunthenticated }) => (
  <div className="navContainer">
    <Navigation />
    {isAunthenticated ? <UserMenu /> : <AuthNav />}
  </div>
);

const mapStateToProps = (state) => ({
  isAunthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
