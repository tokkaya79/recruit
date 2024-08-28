import { useState } from "react";

import "../styles/burgerMenu.scss";

const BurgerMenu = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return (
		<div
			className={`burger-menu ${menuOpen ? "burger-menu--open" : ""}`}
			onClick={toggleMenu}>
			<div className='burger-menu__line'></div>
			<div className='burger-menu__line'></div>
		</div>
	);
};

export default BurgerMenu;
