import { useNavigate } from 'react-router-dom'
import Json from "../data/logements.json"
import "../styles/logement.scss"
import Rating from '../components/rating'

function Logement() {
    const url = window.location.search
    const urlParams = new URLSearchParams(url)
    const  id = urlParams.get("id")
    console.log (id)
    return(
        <div  className="logement_container">
        {Json.filter(item => item.id === id).map(item => (
            <div className='host-container'>
              <img className='pictures' 
                src={item.pictures[0]} 
                alt={item.title} 
              />
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
                  <img src={item.host.picture}></img>
                </div>
                <div className="rating-host-wrapper">
                  <Rating rating={item.rating} />
                </div>
              </div>
              

              {/* <p>{item.pictures.length}</p> */}
            </div>
          ))}
          </div>
    )
}

export default Logement