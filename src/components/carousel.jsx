import React, { useState } from 'react'
import FlecheA from '../assets/flecheA.svg'
import FlecheB from '../assets/flecheB.svg'
import Json from "../data/logements.json"
import { useParams } from 'react-router-dom'
import "../styles/carousel.scss"

const Carousel = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { id } = useParams()

  const next = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex >= pictures.length - 1) {
        return 0
      }
      return prevIndex + 1
    })
  }

  const previous = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex <= 0) {
        return pictures.length - 1
      }
      return prevIndex - 1
    })
  }

  const numImage=currentIndex+1
  const nbImage=Json.find(item => item.id === id).pictures.length
  const pictureNumber=numImage+"/"+nbImage

  return (
    <div className="container-pictures">
      <img className='pictures'
        src={pictures[currentIndex]}
        alt={title}
      />
      {pictures.length > 1 && (
        <>
          <p className="picture-number">{pictureNumber}</p>
          <span onClick={previous} className='left'> <img src={FlecheA} alt="précédent" /> </span>
          <span onClick={next} className="right"> <img src={FlecheB} alt="Suivant" /> </span>
        </>
      )}
    </div>
  )
}

export default Carousel