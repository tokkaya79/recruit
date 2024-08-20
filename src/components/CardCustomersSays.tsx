import Link from "../../node_modules/next/link";

import "../styles/cardCustomersSays.scss";

interface CardCustomersSaysProps {
	title: string;
}

const CardCustomersSays = ({ title }: CardCustomersSaysProps) => {
	return (
		<div className='card-customers-says'>
			<h3 className="card-customers-says__title">{title}</h3>
			<Link className="card-customers-says__link" href='/'>Learn more</Link>
		</div>
	);
};

export default CardCustomersSays;
