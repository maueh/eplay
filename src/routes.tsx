import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'

/*
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/categories',
    element: <Categories />
  }
])
*/

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
