import SecondHero from "./components/SecondHero";
import BackTop from "./components/BackTop";
import Features from "./components/Features";
import ClientsSection from "./components/ClientsSection";
import StatSection from "./components/StatSection";
import ActionCall from "./components/ActionCall";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CardDeal from "./components/CardDeal";

const App = () => (
	<div className='bg-primary w-full overflow-hidden'>
		<BackTop />
		<div className='sm:px-16 px-6 flex justify-center items-center'>
			<div className='xl:max-w-[1280px] w-full'>
				<Navigation />
			</div>
		</div>

		<div className='flex justify-center items-start'>
			<div className='xl:max-w-[1280px] w-full'>
				<Hero />
			</div>
		</div>

		<div className='bg-primary sm:px-16 px-6 justify-center items-center'>
			<div className='xl:max-w-[1280px] w-full'>
				<StatSection />
				<Features />
				<SecondHero />
				<CardDeal />
				<ClientsSection />
				<ActionCall />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
