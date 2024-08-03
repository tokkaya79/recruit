import TwoCardsItem from "./TwoCardsItem";

import "../styles/twoCards.scss";

interface TwoCardsItem {
	name: string;
	text: string;
}

const TwoCards: React.FC = () => {
	const cards: TwoCardsItem[] = [
		{
			name: "Security and compliance",
			text: "We lead with a security-first mindset, a robust infrastructure, and a compliant operating environment.",
		},
		{
			name: "Integrations",
			text: "Integrate Xref with your everyday tools for simplified people management within a single platform.",
		},
	];

	return (
		<div className='two-cards'>
			<div className='container two-cards__container'>
				{cards.map((card, index) => (
					<TwoCardsItem
						key={index}
						name={card.name}
						text={card.text}
					/>
				))}
			</div>
		</div>
	);
};

export default TwoCards;
