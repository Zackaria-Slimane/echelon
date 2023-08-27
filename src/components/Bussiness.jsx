import { features } from "../data";
import { motion } from "framer-motion";
import styles, { layout } from "../style";
import Button from "./Button";
import { FaInfinity, FaArrowUpRightDots, FaSliders, FaUserSecret } from "react-icons/fa6";

const icons = [
	<FaInfinity className='text-cream text-xl ' />,
	<FaArrowUpRightDots className='text-cream text-xl ' />,
	<FaSliders className='text-cream text-xl ' />,
	<FaUserSecret className='text-cream text-xl ' />,
];

const FeatureCard = ({ title, content, index }) => (
	<div className='hover:scale-110'>
		<motion.div
			className={`flex flex-row p-6 rounded-xl shadow-sm shadow-powder ${
				index !== features.length - 1 ? "mb-6" : "mb-0"
			} feature-card`}
			initial={{ opacity: 0, x: -300 }}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}>
			<div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-navy`}>{icons[index]}</div>
			<div className='flex-1 flex flex-col ml-3'>
				<h4 className='font-poppins font-semibold text-cream text-base  mb-1'>{title}</h4>
				<p className='font-poppins font-normal text-cream'>{content}</p>
			</div>
		</motion.div>
	</div>
);

const Business = () => (
	<section id='features' className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				You do the business, <br className='sm:block hidden' /> we’ll handle the money.
			</h2>
			<p className={`${styles.paragraph} max-w-[500px] mt-2`}>
				With the right credit card, you can improve your financial life by building credit, earning
				rewards and saving money. But with hundreds of credit cards on the market.
			</p>

			<Button />
		</div>

		<div className={`${layout.sectionImg} flex-col`}>
			{features.map((feature, index) => (
				<FeatureCard key={feature.id} {...feature} index={index} />
			))}
		</div>
	</section>
);

export default Business;
