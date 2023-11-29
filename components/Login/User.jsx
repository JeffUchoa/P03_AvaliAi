import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Armazenar informações do usuário
  const [loading, setLoading] = useState(true); // Indicar se a autenticação está carregando

  // Adicione suas funções de login e logout aqui

  const authContext = {
    user,
    loading,
    // Adicione suas funções de login e logout aqui
  };

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };