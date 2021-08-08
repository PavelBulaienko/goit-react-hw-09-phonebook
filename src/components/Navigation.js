import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
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
};

export default Navigation;
