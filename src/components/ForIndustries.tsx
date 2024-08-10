import Image from "../../node_modules/next/image";

import "../styles/forIndustries.scss";

const ForIndustries = () => {
	return (
		<section className='for-industries'>
			<div className='container'>
				<div className='for-industries__wrapper'>
					<div className='for-industries__img-block'>
						<Image
							width={586}
							height={422}
							src='/images/for-industries.png'
							alt='for-industries'
						/>
					</div>
					<div className='for-industries__info-block'>
						<span className='for-industries__subtitle'>For industries</span>
						<h2 className='for-industries__title'>
							Tailored to the unique needs of your industry
						</h2>
						<p className='for-industries__text'>
							At Xref, we're people-focused, so no matter what industry you're
							in, we cater to your unique needs to provide you with one source
							of talent truth.
						</p>
						<div className='for-industries__list-block'>
							<ul className='for-industries__list'>
								<li className='for-industries__list-item'>
									<p className='for-industries__list-item-text'>
										Not-For-Profit
									</p>
									<span className='for-industries__list-item-span'>
										<img
											className='for-industries__list-item-icon'
											src='../../images/icons/icon-arrow-right.svg'
											alt='icon-arrow-right'
										/>
									</span>
								</li>
								<li className='for-industries__list-item'>
									<p className='for-industries__list-item-text'>
										Health and Aged Care
									</p>
									<span className='for-industries__list-item-span'>
										<img
											className='for-industries__list-item-icon'
											src='../../images/icons/icon-arrow-right.svg'
											alt='icon-arrow-right'
										/>
									</span>
								</li>
								<li className='for-industries__list-item'>
									<p className='for-industries__list-item-text'>Government</p>
									<span className='for-industries__list-item-span'>
										<img
											className='for-industries__list-item-icon'
											src='../../images/icons/icon-arrow-right.svg'
											alt='icon-arrow-right'
										/>
									</span>
								</li>
							</ul>
							<ul className='for-industries__list'>
								<li className='for-industries__list-item'>
									<p className='for-industries__list-item-text'>Retail</p>
									<span className='for-industries__list-item-span'>
										<img
											className='for-industries__list-item-icon'
											src='../../images/icons/icon-arrow-right.svg'
											alt='icon-arrow-right'
										/>
									</span>
								</li>
								<li className='for-industries__list-item'>
									<p className='for-industries__list-item-text'>Hospitality</p>
									<span className='for-industries__list-item-span'>
										<img
											className='for-industries__list-item-icon'
											src='../../images/icons/icon-arrow-right.svg'
											alt='icon-arrow-right'
										/>
									</span>
								</li>
								<li className='for-industries__list-item'>
									<p className='for-industries__list-item-text'>Construction</p>
									<span className='for-industries__list-item-span'>
										<img
											className='for-industries__list-item-icon'
											src='../../images/icons/icon-arrow-right.svg'
											alt='icon-arrow-right'
										/>
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ForIndustries;
