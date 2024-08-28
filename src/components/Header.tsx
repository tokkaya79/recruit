import Button from "./Button";
import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";

import "../styles/header.scss";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
	const router = useRouter();
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__nav'>
					<nav className='header__nav-main'>
						<ul className='header__list'>
							<li className='header__list-item'>
								<Link
									href='/'
									style={{
										color: router.pathname === "/" ? "#256a5d" : "#2b2c4f",
									}}>
									Why Xref
								</Link>
							</li>
							<li className='header__list-item'>
								<Link
									href='/solutions'
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
									style={{
										color:
											router.pathname === "/pricing" ? "#256a5d" : "#2b2c4f ",
									}}>
									Pricing
								</Link>
							</li>
						</ul>
					</nav>
					<BurgerMenu />
					<div className='header__action'>
						<Link
							className='header__action-link'
							href='/signIn'>
							Sign in
						</Link>
						<Button className='btn-request'>
							<Link href='/demo'>Request a demo</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
