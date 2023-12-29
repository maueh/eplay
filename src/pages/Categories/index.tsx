import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'

const categoriaA: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    description: 'Lorem ipsum',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    category: 'Ação',
    description: 'Lorem ipsum',
    system: 'Windows',
    infos: ['Pré-Venda'],
    image: resident
  },
  {
    id: 3,
    title: 'Resident Evil 4',
    category: 'Ação',
    description: 'Lorem ipsum',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    title: 'Resident Evil 4',
    category: 'Ação',
    description: 'Lorem ipsum',
    system: 'Windows',
    infos: ['17/05'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductsList title="Ação" background="gray" games={categoriaA} />
    <ProductsList title="Aventura" background="black" games={categoriaA} />
    <ProductsList title="RPG" background="gray" games={categoriaA} />
    <ProductsList title="FPS" background="black" games={categoriaA} />
  </>
)

export default Categories
