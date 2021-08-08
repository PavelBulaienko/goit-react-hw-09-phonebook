import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink className="navLink" to="/register" exact>
      Регистрация
    </NavLink>
    <NavLink className="navLink" to="/login" exact>
      Вход
    </NavLink>
  </div>
);

export default AuthNav;
