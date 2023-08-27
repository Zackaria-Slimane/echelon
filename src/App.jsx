import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Business from "./components/Bussiness";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";

const App = () => (
	<div className='bg-primary w-full overflow-hidden'>
		<BackTop />
		<div className='sm:px-16 px-6 flex justify-center items-center'>
			<div className='xl:max-w-[1280px] w-full'>
				<NavBar />
			</div>
		</div>

		<div className='flex justify-center items-start'>
			<div className='xl:max-w-[1280px] w-full'>
				<Hero />
			</div>
		</div>

		<div className='bg-primary sm:px-16 px-6 justify-center items-center'>
			<div className='xl:max-w-[1280px] w-full'>
				<Stats />
				<Business />
				<Billing />
				<CardDeal />
				<Clients />
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
