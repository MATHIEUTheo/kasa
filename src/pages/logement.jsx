import { useParams } from 'react-router-dom'
import Json from "../data/logements.json"
import "../styles/logement.scss"
import Rating from '../components/rating'
import Collapse from '../components/collapse'
import Carousel from '../components/carousel'

function Logement() {
  const { id } = useParams()
  const filteredItems = Json.filter(item => item.id === id)

  if (filteredItems.length === 0) {
    window.location.href = '/erreur'
  }

  return (
    <div className="logement_container">
      {filteredItems.map(item => {
        const infos = [
          {
            title: "Description",
            content: item.description
          },
          {
            title: "Équipements",
            content: item.equipments?.map((equipment, index) => (
              <div key={index}>{equipment}</div>
            ))
          }
        ]

        return (
          <div key={item.id} className='host-container'>
            <Carousel pictures={item.pictures} title={item.title} />

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