import { motion } from "framer-motion";
import styles from "../style";
import Button from "./Button";

const CTA = () => (
	<section
		className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-md box-shadow bg-cream`}>
		<motion.div
			className='flex-1 flex flex-col'
			initial={{ opacity: 0, x: -300 }}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}>
			<h2 className={`text-navy text-3xl sm:text-5xl font-bold`}>
				Ready to Secure Your Financial Future?
			</h2>
			<p className={`${styles.paragraph} max-w-[570px] mt-2 text-navy`}>
				Join today and experience a new level of banking excellence. Whether you're looking for
				secure online banking, personalized financial advice, competitive savings rates, or
				innovative credit card rewards, we have you covered.
			</p>
		</motion.div>

		<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
			<Button />
		</div>
	</section>
);

export default CTA;
