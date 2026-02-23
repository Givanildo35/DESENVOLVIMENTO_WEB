import React, {useEffect, useState} from "react";
import api from "./services/api";

export default function App() {
  const [user, setUser] = useState(null);

  // Carrega dados da API
  useEffect(() => {
    async function loadUser() {
      try {
        const response = await api.get('/users/Givanildo35');
        setUser(response.data);
      } catch (error) {  // ✅ Corrigido
        console.error('Error', error);
      }  
    }
    loadUser();
  }, []);

  if (!user) return <div>Carregando...</div>;

  return (
    <div className="App">  {/* ✅ Corrigido */}
      <p>Usuario: {user.login}</p>
      <p>Biografia: {user.bio || 'Sem Biografia'}</p>
    </div>
  );
}


