import '../style/App.css';
import Phonebook from './Phonebook';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import HomeView from './HomeView';
import RegisterView from './RegisterView';
import LoginView from './LoginView';
import AppBar from './AppBar';
import authOperations from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <PublicRoute path="/register" restricted component={RegisterView} redirectTo="/contacts" />
        <PublicRoute path="/login" restricted component={LoginView} redirectTo="/contacts" />
        <PrivateRoute path="/contacts" component={Phonebook} redirectTo="login" />
      </Switch>
    </div>
  );
};

export default App;
