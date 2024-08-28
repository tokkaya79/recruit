import Link from "../../node_modules/next/link";

import "../styles/footer.scss";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<h2 className='footer__title'>
						<span>Recruit, ratain</span> end remember talent{" "}
						<span>with Xref</span>
					</h2>
					<p className='footer__subtitle'>
						Uncover data-driven, actionable insights with automated reference
						and exit surveys.
					</p>
					<Link
						className='footer__link'
						href='/'>
						Get started
					</Link>
					<div className='footer__columns'>
						<div className='footer__column'>
							<h3 className='footer__column-title'>Solutions</h3>
							<ul className='footer__list'>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Reference</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>
										Pulse<span>Coming soon</span>
									</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Exits</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Not-For-Profit</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Health and aged care</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Government</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Construction</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Retail</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Hospitality</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Talent acquisition</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>
										Recruitment Process Outsourcing (RPO)
									</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>
										Staffing and recruitment firms
									</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>People and culture</Link>
								</li>
							</ul>
						</div>
						<div className='footer__column'>
							<h3 className='footer__column-title'>Platform</h3>
							<ul className='footer__list'>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Survey builder</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Automated requests</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>People records</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link--big'>Insights</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Additional checks</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Integrations</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Security and compliance</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Pricing</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Request a demo</Link>
								</li>
							</ul>
						</div>
						<div className='footer__column'>
							<h3 className='footer__column-title'>Resources</h3>
							<ul className='footer__list'>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>About us</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Careers</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Why Xref</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link--big'>Resource hub</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Blog</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Case studies</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Template Builder</Link>
								</li>
							</ul>
						</div>
						<div className='footer__column'>
							<h3 className='footer__column-title'>More</h3>
							<ul className='footer__list'>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Support</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Contact</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Investor hub</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link--big'>Xref Trust</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>System status</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Glossary</Link>
								</li>
								<li className='footer__list-item'>
									<Link href='footer__list-link'>Sub Processors</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='footer__capcha'>
						<ul className='footer__capcha-list'>
							<li className='footer__capcha-item'>©2022 Xref</li>
							<li className='footer__capcha-item'>
								<Link
									className='footer__capcha-link'
									href='/'>
									Terms of Service
								</Link>
							</li>
							<li className='footer__capcha-item'>
								<Link
									className='footer__capcha-link'
									href='/'>
									Privacy Policy
								</Link>
							</li>
							<li className='footer__capcha-item'>
								13/13 Hickson Road, Dawes Point, Sydney, NSW 2000, Australia
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
