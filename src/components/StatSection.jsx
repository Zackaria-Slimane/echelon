import { motion } from "framer-motion";
import { stats } from "../data";

const StatSection = () => (
	<section className={`flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6`}>
		{stats.map((item) => (
			<motion.div
				key={item.id}
				className='flex-1 flex justify-center items-center flex-row m-3'
				initial={{ opacity: 0, x: 300 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}>
				<h4 className='font-poppins font-semibold text-4xl text-peach underline decoration-dashed hover:scale-110'>
					{item.value}
				</h4>
				<p className='font-poppins font-normal test-xl text-lavender uppercase ml-3'>
					{item.title}
				</p>
			</motion.div>
		))}
	</section>
);

export default StatSection;
