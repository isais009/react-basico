import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// Paginas
import Calculadora from "./pages/Calculadora"
import Galeria from "./pages/Galeria"
import Validacion from "./pages/Validacion"
import Pokemon from "./pages/Pokemon"

function App() {

  return (
    <Router>

      <header className='header'>
        <nav>
          <NavLink to='/' >Inicio</NavLink>
          <NavLink to='/calc'>Calculadora</NavLink>
          <NavLink to='/galeria'>Galeria</NavLink>
          <NavLink to='/validacion'>Validacion</NavLink>
          <NavLink to='/pokemon'>Pokemon</NavLink>
        </nav>
      </header>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/calc" element={<Calculadora />} />
        <Route path="/galeria" element={<Galeria /> } />
        <Route path="/validacion" element={<Validacion /> } />
        <Route path="/pokemon" element={<Pokemon /> } />
      </Routes>
    </Router>
  );

}


const Home = () => {
  return(
    <>
      <center>
        <h2>Pagina de inicio</h2>
      </center>
    </>
  )
}

export default App
