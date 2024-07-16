import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import Json from "../data/logements.json"
import "../styles/logement.scss"
import Rating from '../components/rating'
import FlecheA from '../assets/flecheA.svg'
import FlecheB from '../assets/flecheB.svg'
import Collapse from '../components/collapse'

function Logement() {
  const url = window.location.search
  const urlParams = new URLSearchParams(url)
  const id = urlParams.get("id")
  const [currentIndex, setCurrentIndex] = useState(0)
  const filteredItems = Json.filter(item => item.id === id);

if (filteredItems.length === 0) {
  window.location.href = '/erreur';
}

  const next = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex >= Json.find(item => item.id === id).pictures.length - 1) {
        return prevIndex = 0
      }
      prevIndex = prevIndex + 1
      return prevIndex
    })
  }

  const previous = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex <= 0) {
        return prevIndex = Json.find(item => item.id === id).pictures.length - 1
      }
      prevIndex = prevIndex - 1
      return prevIndex
    })
  }
  // const numImage=currentIndex+1
  // const nbImage=Json.find(item => item.id === id).pictures.length
  // const pictureNumber=numImage+"/"+nbImage

  return (
    <div className="logement_container">
      {Json.filter(item => item.id === id).map(item => {
        const infos = [
          {
            title: "Description",
            content: item.description
          },
          {
            title: "équipements",
            content: item.equipments?.map((equipment, index) => (
              <div key={index}>{equipment}</div>
            ))
          }
        ]

        return (
          <div key={item.id} className='host-container'>
            <div className="container-pictures">
              <img className='pictures'
                src={item.pictures[currentIndex]}
                alt={item.title}
              />
              {/* <p>{pictureNumber}</p> */}
              <span onClick={previous} className='left'> <img src={FlecheA} alt="précédent" /> </span>
              <span onClick={next} className="right"> <img src={FlecheB} alt="Suivant" /> </span>
            </div>

            <div className='titre'>
              <h1>{item.title}</h1>
              <h2>{item.location}</h2>

              {item.tags &&
                item.tags.length > 0 &&
                item.tags.map((tag, index) => (
                  <span key={index} className="tag-span">
                    {tag}
                  </span>
                ))}
            </div>
            <div className='host-profil'>
              <div className='host'>
                <p>{item.host.name}</p>
                <img src={item.host.picture} alt={item.host.name} />
              </div>
              <div className="rating-host-wrapper">
                <Rating rating={item.rating} />
              </div>
            </div>
            <div className="buttons-container">
              <Collapse informations={infos} className='info' />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Logement