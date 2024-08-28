import { useState } from "react";
import { useRouter } from "../../node_modules/next/router";
import Link from "../../node_modules/next/link";
import Button from "./Button";
import BurgerMenu from "./BurgerMenu";

import "../styles/header.scss";

const Header = () => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__nav'>
					<BurgerMenu
						menuOpen={menuOpen}
						toggleMenu={toggleMenu}
					/>
					<nav className={`header__nav-main ${menuOpen ? "open" : ""}`}>
						<ul className='header__list'>
							<li className='header__list-item'>
								<Link
									href='/'
									onClick={closeMenu}
									style={{
										color: router.pathname === "/" ? "#256a5d" : "#2b2c4f",
									}}>
									Why Xref
								</Link>
							</li>
							<li className='header__list-item'>
								<Link
									href='/solutions'
									onClick={closeMenu}
									style={{
										color:
											router.pathname === "/solutions" ? "#256a5d" : "#2b2c4f",
									}}>
									Solutions
								</Link>
							</li>
							<li className='header__list-item'>
								<Link
									href='/platform'
									onClick={closeMenu}
									style={{
										color:
											router.pathname === "/platform" ? "#256a5d" : "#2b2c4f",
									}}>
									Platform
								</Link>
							</li>
							<li className='header__list-item'>
								<Link
									href='/resources'
									onClick={closeMenu}
									style={{
										color:
											router.pathname === "/resources" ? "#256a5d" : "#2b2c4f",
									}}>
									Resources
								</Link>
							</li>
							<li className='header__list-item'>
								<Link
									href='/pricing'
									onClick={closeMenu}
									style={{
										color:
											router.pathname === "/pricing" ? "#256a5d" : "#2b2c4f ",
									}}>
									Pricing
								</Link>
							</li>
						</ul>
					</nav>
					<div className='header__action'>
						<Link
							className='header__action-link'
							href='/signIn'
							onClick={closeMenu}>
							Sign in
						</Link>
						<Button className='btn-request'>
							<Link
								href='/demo'
								onClick={closeMenu}>
								Request a demo
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
