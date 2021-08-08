import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => {
    setEmail({ email: e.target.value });
  };

  const [password, setPassword] = useState('');
  const handleChangePassword = (e) => {
    setPassword({ password: e.target.value });
  };

  const dispatch = useDispatch();
  const onLogin = (credentials) => dispatch(authOperations.logIn(credentials));
  const handleSubmit = async (e) => {
    e.preventDefault();

    await onLogin({ email: email.email, password: password.password });

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логин</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Почта
          <input type="email" name="email" onChange={handleChangeEmail} />
        </label>
        <label>
          Пароль
          <input type="password" name="password" onChange={handleChangePassword} />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginView;
