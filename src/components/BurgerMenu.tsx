import "../styles/burgerMenu.scss";

const BurgerMenu = ({
	menuOpen,
	toggleMenu,
}: {
	toggleMenu: () => void;
	menuOpen: boolean;
}) => {
	return (
		<div
			className={`burger-menu ${menuOpen ? "burger-menu--open" : ""}`}
			onClick={toggleMenu}>
			<span className='burger-menu__line'></span>
			<span className='burger-menu__line'></span>
		</div>
	);
};

export default BurgerMenu;
