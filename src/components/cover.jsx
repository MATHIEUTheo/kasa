import { useNavigate } from 'react-router-dom'
import Json from "../data/logements.json"
import "../styles/cover.scss"

function Cover () {
   const navigate = useNavigate()
      const handleClick = (id) => {
      navigate(`/logement/${id}`)
    }

  return (
    <div className="card_container">
      {Json.map(item => (
        <div key={item.id} className="card">
          <div className='container_img'>
            <img
              src={item.cover} 
              alt={item.title} 
              onClick={() => handleClick(item.id)} 
            />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Cover




