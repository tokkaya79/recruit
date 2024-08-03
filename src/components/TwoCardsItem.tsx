import Link from "../../node_modules/next/link";

import "../styles/twoCardsItem.scss";

interface TwoCardsItemProps {
	name: string;
	text: string;
}

const TwoCardsItem = ({ name, text }: TwoCardsItemProps) => {
	return (
		<div className='two-cards-item'>
			<h3 className='two-cards-item__title'>{name}</h3>
			<p className='two-cards-item__text'>{text}</p>
			<Link
				className='two-cards-item__link'
				href='/'>
				Learn more
			</Link>
		</div>
	);
};

export default TwoCardsItem;
