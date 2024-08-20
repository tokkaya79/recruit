import Link from "../../node_modules/next/link";
import CardCustomersSays from "./CardCustomersSays";

import "../styles/customersSays.scss";

interface Card {
	title: string;
}

const CustomersSays: React.FC = () => {
	const cards: Card[] = [
		{
			title: "How Westpac benefit from Xref’s tailored service",
		},
		{
			title: "Getting to know candidates with Xref",
		},
		{
			title: "Enjoying Fast, Effective and Accurate Results",
		},
	];
	return (
		<section className='customers-says'>
			<div className='container'>
				<span className='customers-says__subtitle'>What our customers say</span>
				<h2 className='customers-says__title'>
					Trusted by the companies you trust
				</h2>
				<div className='customers-says__card-block'>
					<div className='customers-says__card-block-up'>
						{cards.map((card, index) => (
							<CardCustomersSays
								key={index}
								title={card.title}
							/>
						))}
					</div>
					<div className='customers-says__card-block-down'>
						<div className='customers-says__card-block-down-big'>
							<div className='customers-says__card-block-down-big-left'>
								<h3 className='customers-says__card-block-down-big-left-title'>
									Over<span>200</span>
								</h3>
								<p className='customers-says__card-block-down-big-left-text'>
									User reviews have proven to outperform any other assessments
									in the consumer world. That’s why we’re proud of what our
									reviewers have to say.
								</p>
								<Link
									className='customers-says__card-block-down-big-left-link'
									href='/'>
									Why users love us
								</Link>
							</div>
							<div className='customers-says__card-block-down-big-right'>
								<h3 className='customers-says__card-block-down-big-right-count'>
									4.7<span>out of 5</span>
								</h3>
								<ul className='customers-says__card-block-down-big-right-list'>
									<li className='customers-says__card-block-down-big-right-list-item'>
										<span>9.4</span>Ease of use
									</li>
									<li className='customers-says__card-block-down-big-right-list-item'>
										<span>9.3</span>Quality of support
									</li>
									<li className='customers-says__card-block-down-big-right-list-item'>
										<span>9.2</span>Ease of setup
									</li>
								</ul>
							</div>
						</div>
						<div className='customers-says__card-block-down-small'>
							<h3 className='customers-says__card-block-down-small-title'>
								Leading the pack
							</h3>
							<div className='customers-says__card-block-down-small-info'>
								<div className='customers-says__card-block-down-small-capterra'>
									<span>Capterra</span>
									<p>93 reviews as of 7/10/2022</p>
								</div>
								<div className='customers-says__card-block-down-small-google'>
									<span>Google</span>
									<p>744 reviews as of 7/10/2022</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomersSays;
