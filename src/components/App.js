import '../style/App.css';
import Phonebook from './Phonebook';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import HomeView from './HomeView';
import RegisterView from './RegisterView';
import LoginView from './LoginView';
import AppBar from './AppBar';
import { Component } from 'react';
import authOperations from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            component={RegisterView}
            redirectTo="/contacts"
          />
          <PublicRoute path="/login" restricted component={LoginView} redirectTo="/contacts" />
          {/* <Route path="/login" component={LoginView} /> */}
          <PrivateRoute path="/contacts" component={Phonebook} redirectTo="login" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
