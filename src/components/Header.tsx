import Button from "./Button";

import "../styles/header.scss";

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__nav'>
					<nav className='header__nav-main'>
						<ul className='header__list'>
							<li className='header__list-item'>Why Xref</li>
							<li className='header__list-item'>Solutions</li>
							<li className='header__list-item'>Platform</li>
							<li className='header__list-item'>Resources</li>
							<li className='header__list-item'>Pricing</li>
						</ul>
					</nav>
					<div className='header__action'>
						<a
							className='header__action-link'
							href=''>
							Sign in
						</a>
						<Button className='btn-request'>Request a demo</Button>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
