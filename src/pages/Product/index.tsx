import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import imagemJogo from '../../assets/images/resident.png'
import { useEffect, useState } from 'react'
import { Game } from '../Home'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="grey">
        <>
          <ul>
            <li>
              <strong>Plataforma: </strong>
              {game.details.system}
            </li>
            <li>
              <strong>Desenvolvedor: </strong>
              {game.details.developer}
            </li>
            <li>
              <strong>Editora: </strong>
              {game.details.publisher}
            </li>
            <li>
              <strong>Idiomas: </strong>
              {game.details.languages.join(', ')}
            </li>
          </ul>
        </>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
