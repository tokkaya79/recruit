import Button from "@/components/Button";
import "../styles/home.scss";

const Home = () => {
	return (
		<>
			<section className='main'>
				<div className='container'>
					<div className='main__wrapper'>
						<h1 className='main__title'>
							Recruit, retain and remember your people
						</h1>
						<p className='main__subtitle'>
							Simplify your talent journey and make confident, people-focused
							decisions with Xref.
						</p>
						<Button className='get__started'>Get started for free</Button>
						<a
							href=''
							className='main__link'>
							Request a demo
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
