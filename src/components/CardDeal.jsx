import { stackes } from "../assets";
import { motion } from "framer-motion";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
	<section className={layout.section}>
		<motion.div
			className={layout.sectionInfo}
			initial={{ opacity: 0, x: -300 }}
			transition={{ duration: 1.5 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}>
			<h2 className={styles.heading2}>Exclusive Cards Deals</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Unlock a world of benefits with our range of credit and debit card options. At we offer
				cards tailored to your lifestyle and financial goals. Explore our current card deals and
				discover how you can save and earn rewards with every swipe
			</p>
			<Button />
		</motion.div>

		<div className={layout.sectionImg}>
			<img src={stackes} alt='billing' className='w-[100%] h-[100%]' />
		</div>
	</section>
);

export default CardDeal;
