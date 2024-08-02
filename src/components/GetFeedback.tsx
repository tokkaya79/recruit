import CardsFeedback from "./CardsFeedback";

import "../styles/getFeedback.scss";

interface Card {
	icon: string;
	title: string;
	subtitle: string;
	span: string;
	spanTitle: string;
	text: string;
}

const GetFeedback: React.FC = () => {
	const cards: Card[] = [
		{
			icon: "/images/icons/icon-loon.png",
			title: "only the best validated talent.",
			subtitle: "Reference",
			span: "",
			spanTitle: "Recruit",
			text: "Time to hire and secure top talent fast. Make informed, compliant hiring decisions with Xref’s automated reference checking software.",
		},
		{
			icon: "/images/icons/icon-circl.png",
			title: "your people and make meaningful",
			subtitle: "Pulse",
			span: "comming soon",
			spanTitle: "Retain",
			text: "Want the secret to reduce attrition and understand what metrics your organisation performs well at or can improve upon? Conduct a Pulse Survey",
		},
		{
			icon: "/images/icons/icon-three.png",
			title: " ",
			subtitle: "Exits",
			span: "new",
			spanTitle: "Remember",
			text: "Collect, analyse and measure feedback from departing employees. Reduce attrition and improve retention over time by collecting consistent data to improve organisational performance.",
		},
	];

	return (
		<section className='get-feedback'>
			<div className='container'>
				<div className='get-feedback__top'>
					<div className='get-feedback__top-left'>
						<p className='get-feedback__undertitle'>Introducing Xref</p>
						<h2 className='get-feedback__title'>
							Get feedback across the entire talent journey
						</h2>
					</div>
					<div className='get-feedback__top-right'>
						<ul className='get-feedback__list'>
							<li className='get-feedback__list-item'>
								<h3 className='get-feedback__name'>Simple</h3>
								<p className='get-feedback__description'>
									Save time: Create and send a survey in as little as 30
									seconds. Feedback is compiled in easy to understand graphs for
									actionable insights.
								</p>
							</li>
							<li className='get-feedback__list-item'>
								<h3 className='get-feedback__name'>Convenient</h3>
								<p className='get-feedback__description'>
									Reduce admin: Surveys can be created and completed anywhere,
									any time, on any device. Let automation do the rest.
								</p>
							</li>
							<li className='get-feedback__list-item'>
								<h3 className='get-feedback__name'>Secure</h3>
								<p className='get-feedback__description'>
									Ensure peace of mind: Xref is ISO27001 certified and GDPR
									compliant so your data is kept safe and secure.
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className='get-feedback__bottom'>
					<CardsFeedback cards={cards} />
				</div>
			</div>
		</section>
	);
};

export default GetFeedback;
