import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { auth } from '../../firebase';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirectToMain, setRedirectToMain] = useState(false);

  const handleLogin = async () => {
    try {
      
      await auth.signInWithEmailAndPassword(email, password);
      
      setRedirectToMain(true);
    } catch (error) {
      setMessage('Erro ao fazer login: ' + error.message);
    }
  };

  
  if (redirectToMain) {
    return <Redirect to="/main" />;
  }

  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Acessar</button>
      <label>{message}</label>
      <p>Não tem uma conta? <Link to="/signup">Registre-se aqui</Link></p>
      <p><Link to="/main">Ir para a página principal</Link></p>
    </div>
  );
}

export default LoginPage;