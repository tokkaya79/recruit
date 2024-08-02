import CardFeedback from "./CardFeedback";

import "../styles/cardsFeedback.scss";

interface CardsFeedbackProps {
	cards: {
		icon: string;
		title: string;
		subtitle: string;
		span: string;
		spanTitle: string;
		text: string;
	}[];
}

const CardsFeedback: React.FC<CardsFeedbackProps> = ({ cards }) => {
	return (
		<div className='cards-feedback'>
			{cards.map((card, index) => (
				<CardFeedback
					key={index}
					icon={card.icon}
					title={card.title}
					subtitle={card.subtitle}
					span={card.span}
					spanTitle={card.spanTitle}
					text={card.text}
					index={index}
				/>
			))}
		</div>
	);
};

export default CardsFeedback;
