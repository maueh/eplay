import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../pages/Home'
import { Items, Item, Action, Modal, ModalContent } from './styles'

import jogo from '../../assets/images/zelda.png'
import jogo1 from '../../assets/images/resident.png'
import jogo2 from '../../assets/images/star_wars.png'
import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/mais-zoom.png'
import fechar from '../../assets/images/close.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: jogo
  },
  {
    type: 'image',
    url: jogo1
  },
  {
    type: 'image',
    url: jogo2
  },
  {
    type: 'video',
    url: jogo
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/OTZ14cfHfU8?si=Rmz5pCBXCDHv2ajz'
  }
]

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Media ${index} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>gyuuiyiouyhiouuiouio;u jkghbjhkgh ljkghj jhjkh jklh jklhgl</h4>
            <img src={fechar} alt="Fechar modal" onClick={() => closeModal()} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url}></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
