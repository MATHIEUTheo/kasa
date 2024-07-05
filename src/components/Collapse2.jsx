import '../styles/Collapse.scss'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "../styles/Collapse2.scss"

export const Collapse2 = ({ title, children }) => {
	const [showContent, setShowContent] = useState(false)

	return (
		<div className="collapse2">
			<button
				className="securiteBtn"
				onClick={() => setShowContent(!showContent)}
			>
				{title}
				<span className={`icon ${showContent ? "rotated" : ""}`}>
					<FontAwesomeIcon icon={faChevronUp} />
				</span>
			</button>
			{showContent && <>{children}</>}
		</div>
	);
};
