import Additional from "@/components/Additional";
import Button from "@/components/Button";
import CustomersSays from "@/components/CustomersSays";
import ForIndustries from "@/components/ForIndustries";
import ForTeams from "@/components/ForTeams";
import GetFeedback from "@/components/GetFeedback";
import Platform from "@/components/Platform";
import TwoCards from "@/components/TwoCards";

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
			<GetFeedback />
      <Platform/>
      <Additional/>
      <TwoCards/>
      <ForTeams/>
      <ForIndustries/>
      <CustomersSays/>
		</>
	);
};

export default Home;
