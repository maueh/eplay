import { Container, List, Title } from './styles'
import Product from '../Product'
import { Game } from '../../pages/Home'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              title={game.name}
              category={game.details.category}
              system={game.details.system}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              id={game.id}
            ></Product>
          ))}
        </List>
      </div>
    </Container>
  )
}
export default ProductsList
