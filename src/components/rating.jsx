import fullstar from '../assets/star.svg'
import emptystar from '../assets/emptystar.svg'

function Rating({ rating }) {
	const score = parseInt(rating)
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={fullstar}
						alt="rating star"
					/>
				) : ( 
					<img
						key={level.toString()}
						className="star"
						src={emptystar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}


export default Rating