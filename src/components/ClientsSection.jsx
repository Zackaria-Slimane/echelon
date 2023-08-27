import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { FaArtstation, FaBuyNLarge, FaContao, FaDeskpro } from "react-icons/fa6";

const clientsLogos = [
	<FaArtstation className='text-cream text-[4em] sm:w-[192px] w-[100px] object-contain ' />,
	<FaBuyNLarge className='text-cream text-[4em] sm:w-[192px] w-[100px] object-contain ' />,
	<FaContao className='text-cream text-[4em]  sm:w-[192px] w-[100px] object-contain' />,
	<FaDeskpro className='text-cream text-[4em]  sm:w-[192px] w-[100px] object-contain' />,
];

const ClientsSection = () => (
	<>
		<section id='features' className={layout.section}>
			<div className={`${layout.sectionImg} grid grid-cols-2 gap-2`}>
				{clientsLogos.map((client, index) => (
					<div
						key={client.index}
						className={`${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
						{clientsLogos[index]}
					</div>
				))}
			</div>

			<motion.div
				className={layout.sectionInfo}
				initial={{ opacity: 0, x: 300 }}
				transition={{ duration: 1.5 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}>
				<h2 className={styles.heading2}>
					Trusted Partners <br /> and Satisfied Clients
				</h2>
				<p className={`${styles.paragraph} max-w-[500px] mt-2`}>
					We take pride in our strong partnerships and the trust we've earned from our valued
					clients. Our commitment to excellence has led us to collaborate with reputable
					organizations and serve a diverse range of clients
				</p>
			</motion.div>
		</section>
	</>
);

export default ClientsSection;
