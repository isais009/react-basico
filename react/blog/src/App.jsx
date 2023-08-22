import './assets/css/normalize.css'
import './assets/css/styles.css'

import Header from './components/Header'
import Galeria from './components/Galeria'
import Contenido from './components/Contenido'

import Footer from './components/Footer'


function App() {

  return (
    <>
      <Header />
      <Galeria />

      <Contenido/>

      <Footer />
    </>
  )
}

export default App
