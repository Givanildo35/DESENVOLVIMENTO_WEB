import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Sobre} from './pages/Sobre';
import { Home } from './pages/Home';
// Rotas no React: mecanismo para navegaçao entre diferentes paginas ou componentes em uma aplicaçao de pagina unica(SPA)

// importaçao direta de uma pagina
function App(){
  return(
    <BrowserRouter>
      <Navbar/>

      <main style={{padding:'2px'}}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App
