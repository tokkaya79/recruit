import Image from "../../node_modules/next/image";

import "../styles/cardFeedback.scss";

interface CardFeedbackProps {
	icon: string;
	title: string;
	subtitle: string;
	span: string;
	spanTitle: string;
	text: string;
	index: number;
}

const CardFeedback = ({
	icon,
	title,
	subtitle,
	spanTitle,
	span,
	text,
	index,
}: CardFeedbackProps) => {
	return (
		<div className='card-feedback'>
			<div className='card-feedback__icon'>
				<Image
					width={64}
					height={64}
					src={icon}
					alt={subtitle}
				/>
			</div>
			<div className='card-feedback__info'>
				<div className='card-feedback__subtitle'>
					{subtitle}
					{index !== 0 && (
						<span
							className={`card-feedback__subtitle--span ${
								index === 2 ? "card-feedback__subtitle--span-yellow" : ""
							}`}>
							{span}
						</span>
					)}
				</div>
				<h3 className='card-feedback__title'>
					<span className='card-feedback__title--span'>{spanTitle}</span>
					{title}
				</h3>
				<p className='card-feedback__text'>{text}</p>
			</div>
		</div>
	);
};

export default CardFeedback;
