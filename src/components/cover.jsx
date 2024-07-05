import { useNavigate } from 'react-router-dom'
import Json from "../data/logements.json"
import "../styles/cover.scss"

function Cover() {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/logement?id=${id}`)
  };

  return (
    <div className="card_container">
      {Json.map(item => (
        <div key={item.id} className="card">
          <img 
            src={item.cover} 
            alt={item.title} 
            onClick={() => handleClick(item.id)} 
          />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Cover;




