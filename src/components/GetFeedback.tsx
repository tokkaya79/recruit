import "../styles/getFeedback.scss";

const GetFeedback = () => {
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
        <div className="get-feedback__bottom">

        </div>
			</div>
		</section>
	);
};

export default GetFeedback;
