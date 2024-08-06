import Image from "../../node_modules/next/image";
import Button from "./Button";

import "../styles/additional.scss";

const Additional = () => {
	return (
		<section className='additional'>
			<div className='container'>
				<div className='additional__wrapper'>
					<div className='additional__info'>
						<span className='additional__subtitle'>Additional checks</span>
						<h2 className='additional__title'>
							Connecting you to the world of digital trust
						</h2>
						<p className='additional__text'>
							As a growing community of global checking vendors, Trust
							Marketplace is an aggregator for enhanced due diligence in the
							online trust environment.
						</p>
						<Button className='additional__btn'>Visit website</Button>
					</div>
					<div className='additional__img-box'>
						<Image
							width={645}
							height={390}
							src='/images/additional.png'
							alt='additional-img'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Additional;
