import { billing } from "../assets";
import { motion } from "framer-motion";
import styles, { layout } from "../style";

export default function SecondHero() {
	return (
		<section id='product' className={layout.sectionReverse}>
			<div className={layout.sectionImgReverse}>
				<img
					src={billing}
					alt='billing'
					className='w-[100%] h-[100%] relative z-[5] animate-softbounce-slow'
				/>
				{/* gradient start */}
				<div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
				<div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' />
				{/* gradient end */}
			</div>

			<motion.div
				className={layout.sectionInfo}
				initial={{ opacity: 0, x: 300 }}
				transition={{ duration: 1.5 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}>
				<h2 className={styles.heading2}>
					Advanced Security Protocols <br className='sm:block hidden' /> Utilizing cutting-edge
					technology.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Our advanced systems work round-the-clock to detect and prevent any unauthorized activity,
					ensuring your funds are secure.
				</p>
			</motion.div>
		</section>
	);
}
