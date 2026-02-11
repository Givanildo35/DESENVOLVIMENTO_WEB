import { useState } from 'react' // hook para gerenciar estado local (variaveis que mudam)
import reactLogo from './assets/react.svg' // importar a imagem do react
import viteLogo from '/vite.svg' //importa a imagem do Vite
import './App.css' // puxando arquivos

//componente app
function App() {
  const [count, setCount] = useState(0)
// retornar a UI - User Interface -  interface do usuario
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
// define o que o carro faz, é o componete principal da aplicação
// ele organiza a Navbar fica, quias as Routes(rotas)
// agrupa todos os outros sub-componetes
// coloco tudo que quero que apareça em todas as páginas
