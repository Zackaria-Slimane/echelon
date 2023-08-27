import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { stackes } from "../assets";
import Button from "./Button";

const Hero = () => {
	return (
		<section id='home' className={`flex md:flex-row flex-col sm:py-16 py-6`}>
			<div className={`flex-1 flex justify-start items-start flex-col xl:px-0 sm:px-16 px-4`}>
				<div className='flex flex-row justify-between items-center w-full mt-14 sm:mt-24'>
					<h1 className='flex-1 font-poppins font-semibold text-4xl sm:text-6xl text-white '>
						Secure <br className='sm:block hidden' />{" "}
						<span className='text-gradient'>Financial</span> Solutions
						<br />
					</h1>
				</div>
				<div>
					<h1 className='font-poppins font-semibold text-3xl text-white sm:text-4xl mt-4'>
						Banking{" "}
						<TypeAnimation
							className='font-poppins font-semibold text-3xl text-white sm:text-4xl'
							sequence={["Seamlessly", 1500, "Reliably", 1500, "Securely", 1500]}
							speed={30}
							wrapper='span'
							repeat={Infinity}
						/>
						<br />
					</h1>
				</div>

				<div className='mt-6'>
					<Button />
				</div>

				<motion.div
					initial={{ opacity: 0, x: -200 }}
					transition={{ duration: 1.5 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}>
					<p
						className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
						Our mission is to provide you with seamless financial services that empower your
						financial journey. Whether you're saving, investing, or planning for the future, we're
						here to guide you every step of the way
					</p>
				</motion.div>
			</div>

			<div className={`flex-1  flex justify-center items-center md:mr-0  my-10 relative`}>
				<img
					src={stackes}
					className='w-[100%] h-[100%] relative z-[5] animate-softbounce-slow rounded-lg'
					alt='wallet main image'
				/>
				<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
				<div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
				<div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
			</div>
		</section>
	);
};

export default Hero;
