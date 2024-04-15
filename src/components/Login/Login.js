import React from 'react';
import './login.css'; 

const Login = () => {
  return (
    <div class="login-container">
    <div class="login-main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div class="login">
        <form class="login-form">
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input class="input" type="email" name="email" placeholder="Email" required />
          <input class="input" type="password" name="pswd" placeholder="Senha" required />
          <button>Login</button>
        </form>
      </div>
      <div class="register">
        <form class="login-form">
          <label htmlFor="chk" aria-hidden="true">Registre-se</label>
          <input class="input" type="text" name="txt" placeholder="Nome" required />
          <input class="input" type="email" name="email" placeholder="Email" required />
          <input class="input" type="password" name="pswd" placeholder="Senha" required />
          <input class="input" type="password" name="pswd" placeholder="Confirmação de senha" required />
          <button>Registrar</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;