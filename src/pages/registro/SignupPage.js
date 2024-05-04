import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, firestore } from '../../../src/firebase'; 

export function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      
      await firestore.collection('users').doc(user.uid).set({
        firstName: firstName,
        lastName: lastName,
        birthdate: birthdate
      });

      
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setBirthdate('');
      setMessage('Usuário cadastrado com sucesso!');
    } catch (error) {
      setMessage('Erro ao cadastrar usuário: ' + error.message);
    }
  };

  return (
    <div className="SignupPage">
      <h1>Cadastrar</h1>
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
      <input
        type="text"
        placeholder="Nome"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={handleSignup}>Cadastrar</button>
      <label>{message}</label>
      <p>Já tem uma conta? <Link to="/login">Faça login aqui</Link></p>
    </div>
  );
}

export default SignupPage;
