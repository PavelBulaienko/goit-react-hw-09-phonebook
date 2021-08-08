import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import defaultAvatar from '../defaultImg/defaultAvatar.png';
import authOperations from '../redux/auth/auth-operations';
import { useCallback } from 'react';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [dispatch]);

  return (
    <div className="userMenuContainer">
      <img className="userMenuAvatar" src={avatar} alt="" width="32" height="32" />
      <span className="userMenuName">Welcome, {name}</span>
      <button className="btnLogout" type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
