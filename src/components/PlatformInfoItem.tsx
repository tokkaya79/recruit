import Link from "../../node_modules/next/link";

import "../styles/platformInfoItem.scss";

interface PlatformInfoItemProps {
	name: string;
	text: string;
}

const PlatformInfoItem = ({ name, text }: PlatformInfoItemProps) => {
	return (
		<div className='platform-info-item'>
			<h3 className='platform-info-item__name'>{name}</h3>
			<p className='platform-info-item__text'>{text}</p>
			<Link
				className='platform-info-item__link'
				href={`/`}>
				Learn more
			</Link>
		</div>
	);
};

export default PlatformInfoItem;
