import React, { useState, useRef} from 'react'
import '../styles/Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"


const Collapse = ({informations}) => {
    const [openIndexes, setOpenIndexes] = useState(informations.map(() => false))
    const contentRefs = useRef(informations.map(() => React.createRef()))
  
    const toggleCollapse = (index) => {
      setOpenIndexes((prevOpenIndexes) => {
        const newOpenIndexes = [...prevOpenIndexes]
        newOpenIndexes[index] = !newOpenIndexes[index]
        return newOpenIndexes
      })
   }
   
    return (
      <div>
        <div className="collapse-wrapper">
          {informations.map((item, index) => (
            <div key={index} className="collapse-container">
              <button className="collapse-button" onClick={() => toggleCollapse(index)}>
                {item.title}
                <span className={`icon ${openIndexes[index] ? 'rotate' : ''}`}>
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
              </button>
              <div
                className="collapse-content"
                style={{
                  maxHeight: openIndexes[index] ? `${contentRefs.current[index].current.scrollHeight}px` : '0px',
                }}
                ref={contentRefs.current[index]}>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Collapse
