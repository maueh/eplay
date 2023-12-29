import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'

const promocoes: Game[] = [
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

const Home = () => (
  <>
    <Banner />
    <ProductsList title="Promoções" background="gray" games={promocoes} />
    <ProductsList title="Em breve" background="black" games={promocoes} />
  </>
)

export default Home
