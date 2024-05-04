import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../../firebase';

function MainPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const uid = user.uid;
          const userDoc = await firestore.collection('users').doc(uid).get();
          if (userDoc.exists) {
            setUserData(userDoc.data());
          } else {
            console.log('Documento do usuário não encontrado no Firestore');
          }
        } else {
          console.log('Nenhum usuário autenticado encontrado');
        }
      } catch (error) {
        console.error('Erro ao obter os dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="MainPage">
      <h1>Bem-vindo à página principal</h1>
      {userData ? (
        <div>
          <p>Nome: {userData.firstName}</p>
          <p>Sobrenome: {userData.lastName}</p>
          <p>Data de Nascimento: {userData.birthdate}</p>
        </div>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
}

export default MainPage;