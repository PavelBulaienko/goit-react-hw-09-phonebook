import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import defaultAvatar from '../defaultImg/defaultAvatar.png';
import authOperations from '../redux/auth/auth-operations';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="userMenuContainer">
    <img className="userMenuAvatar" src={avatar} alt="" width="32" height="32" />
    <span className="userMenuName">Welcome, {name}</span>
    <button className="btnLogout" type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
