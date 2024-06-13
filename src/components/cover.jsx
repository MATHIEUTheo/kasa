import { useNavigate } from 'react-router-dom';
import Json from "../data/logements.json";
import "../styles/cover.scss";

function Cover() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/logements?id=${id}`);
  };

  return (
    <div className="card_container">
      {Json.map(item => (
        <div className="card">
          <p>{item.title}</p>
          <img 
            src={item.cover} 
            alt={item.title} 
            onClick={() => handleClick(item.id)} 
            style={{ cursor: 'pointer' }}
          />
        </div>
      ))}
    </div>
  );
}

export default Cover;




