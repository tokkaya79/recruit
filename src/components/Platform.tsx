import Image from "../../node_modules/next/image";
import PlatformInfoItems from "./PlatformInfoItems";

import "../styles/platform.scss";

const Platform = () => {
	const platformInfoItems = [
		{
			name: "Survey builder",
			text: "Create compliant, non-bias surveys in seconds. Choose a Reference or Exit Survey template or build your own from a selection of HR-approved, compliant, non-bias questions.",
		},
		{
			name: "Automated requests",
			text: "Receive feedback faster with automated requests. Save time and reduce manual, repetitive tasks with automated survey requests, easily accessible all in one place.",
		},
		{
			name: "People records",
			text: "Build strong talent relationships with centralised people records. Person-specific feedback is stored in one place to easily recruit, retain and remember talent.",
		},
		{
			name: "Insights",
			text: "Know your next move with people and organisational insights. From an aggregated overview of data to detailed feedback, find the insights you need to make confident business decisions.",
		},
	];
	return (
		<section className='platform'>
			<span className='platform__subtitle'>Platform</span>
			<h2 className='platform__title'>Automating your people journey</h2>
			<div className='platform__img-box'>
				<Image
					width={960}
					height={470}
					src='/images/platform.png'
					alt='img-platform'
					quality={100}
					objectFit='cover'
				/>
			</div>
			<div className='container'>
				<div className='platform__info'>
					<PlatformInfoItems items={platformInfoItems} />
				</div>
			</div>
		</section>
	);
};

export default Platform;
