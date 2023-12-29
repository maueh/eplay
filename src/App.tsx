import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import Header from './components/Header'

import { EstiloGlobal } from './styles'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <EstiloGlobal />
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
