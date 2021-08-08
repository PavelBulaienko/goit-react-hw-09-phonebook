import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

const RegisterView = () => {
  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => {
    setEmail({ email: e.target.value });
  };

  const [password, setPassword] = useState('');
  const handleChangePassword = (e) => {
    setPassword({ password: e.target.value });
  };

  const [name, setName] = useState('');
  const handleChangeName = (e) => {
    setName({ name: e.target.value });
  };

  const dispatch = useDispatch();
  const onRegister = (credentials) => dispatch(authOperations.register(credentials));

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ email: email.email, password: password.password, name: name.name });

    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Имя
          <input type="text" name="name" onChange={handleChangeName} />
        </label>
        <label>
          Почта
          <input type="email" name="email" onChange={handleChangeEmail} />
        </label>
        <label>
          Пароль
          <input type="password" name="password" onChange={handleChangePassword} />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterView;
