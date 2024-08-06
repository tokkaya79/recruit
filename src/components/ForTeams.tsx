import Link from "../../node_modules/next/link";
import Image from "../../node_modules/next/image";

import "../styles/forTeams.scss";

const ForTeams = () => {
	return (
		<section className='for-teams'>
			<div className='container'>
				<div className='for-teams__wrapper'>
					<div className='for-teams__info-block'>
						<span className='for-teams__subtitle'>For teams</span>
						<h2 className='for-teams__title'>
							Fits seamlessly into your ecosystem
						</h2>
						<h3 className='for-teams__info-block-title'>Talent acquisition</h3>
            <hr className="for-teams__line"/>
						<p className='for-teams__info-block-text'>
							In a fast-paced market, efficiency and trust are essential for
							Talent Acquisition. Data-driven insights can help confident
							hiring.
						</p>
						<Link
							className='for-teams__info-block-link'
							href='/'>
							Learn more
						</Link>
						<h3 className='for-teams__info-block-title'>People and culture</h3>
            <hr className="for-teams__line"/>
						<p className='for-teams__info-block-text'>
							In a fast-paced, people-driven market, recruiting and retaining
							talent is a challenge. Data-driven feedback is vital to recruit,
							retain and remember top talent.
						</p>
						<Link
							className='for-teams__info-block-link'
							href='/'>
							Learn more
						</Link>
						<p className='for-teams__info-block-text'>
							Unbiased, efficient hiring is imperative for staffing and
							recruitment firms. Fast, data-driven candidate insights can help.
						</p>
						<Link
							className='for-teams__info-block-link'
							href='/'>
							Learn more
						</Link>
					</div>
					<div className='for-teams__img-block'>
						<Image
							width={586}
							height={422}
							src='/images/for-teams.png'
							alt='for-teams'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ForTeams;
