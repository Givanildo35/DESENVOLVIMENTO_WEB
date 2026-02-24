import React, {useEffect, useState} from "react";
import api from "./services/api";
import './App.css';

export default function App() {
  const[username, setUsername] = useState('Givanildo35');
  const[user, setUser] = useState(null);
  const[repos, setRepos] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError]= useState(null);



  // Carrega dados da API
  useEffect(() => {
    async function loadData ( userToSearch = username){
      try{
        setLoading(true);
        setError(null);

        // carrega usuario
        const userResponse = await api.get(`/users/${userToSearch}`); // Api responde
        setUser(userResponse.data); //extrai os dados da API

        const reposResponse = await api.get(`/users/${userToSearch}/repos?per_page=6&sort=updated`);
        setRepos (reposResponse.data);

      } catch(error){
        console.error('Erro', error);
        setError(`Usuario ${userToSearch} não encontrado`);

      } finally{
        setLoading(false);
      }
      loadData();
    }
  }, []);

  if (loading) {
    return( 
      <div className="loadind-container">
          <div className="spinner"></div>
          <p>Carregando perfil...</p>
      </div>
    );
  }

  if(error || !user){
    return(
      <div className="error-container">
        <h2>❌{error}</h2>
        <button> onClick={()=>window.location.reload()}</button>

      </div>
    )
  }
  return (
    <div className="app-container">
      <div className="profile-card"></div>  
      
    </div>
  );
}


