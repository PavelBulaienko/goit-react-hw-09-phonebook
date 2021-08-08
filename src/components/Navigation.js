import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => (
  <div>
    <NavLink className="navLink" to="/" exact>
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink className="navLink" to="/contacts" exact>
        Книга контактов
      </NavLink>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
