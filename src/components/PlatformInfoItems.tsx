import PlatformInfoItem from "./PlatformInfoItem";

import "../styles/platformInfoItems.scss";

interface PlatformInfoItemsProps {
	name: string;
	text: string;
}

const PlatformInfoItems: React.FC<{ items: PlatformInfoItemsProps[] }> = ({
	items,
}) => {
	return (
		<div className='platform-info-items'>
			{items.map((item, index) => (
				<PlatformInfoItem
					key={index}
					name={item.name}
					text={item.text}
				/>
			))}
		</div>
	);
};

export default PlatformInfoItems;
