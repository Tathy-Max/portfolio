import LineGradient from '../components/shared/LineGradient';
import { motion } from 'framer-motion';

const Testimonials = () => {
	return (
		<section id="testimonials" className="pt-32 pb-16">
			{/* HEADING */}
			<motion.div
				className="md:w-1/3 text-center md:text-left"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<div>
					<p className="font-playfair font-semibold text-4xl text-deep-blue">
						<span className="text-white">TESTI</span>MONIALS
					</p>
					<div className=" mt-5">
						<LineGradient width="w-2/5" />
					</div>
				</div>

				<p className="mt-10">Here's what people are saying about my Work.</p>
			</motion.div>

			{/* TESTIMONIALS */}
			<div className="md:flex md:justify-between gap-8">
				<motion.div
					className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-10 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.6 }}
					variants={{
						hidden: { opacity: 0, scale: 0.8 },
						visible: { opacity: 1, scale: 1 },
					}}
				>
					<p className="font-playfair text-6xl mt-5">“</p>
					<p className="text-center text-xl">
						I can confidently say that she has incredible attention to detail,
						is hard-working and never takes the easy way out to deliver
						something.
					</p>
					<p className="text-xs text-right pt-5">
						Tulio Minini - Ironhack FullStack Web Developer
					</p>
				</motion.div>

				<motion.div
					className="mx-auto relative bg-purple-300 max-w-[400px] h-[350px] flex flex-col justify-end p-10 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					variants={{
						hidden: { opacity: 0, scale: 0.8 },
						visible: { opacity: 1, scale: 1 },
					}}
				>
					<p className="font-playfair text-6xl mt-5">“</p>
					<p className="text-center text-xl">
						Tathy is that rare someone who has industry expertise, boundless
						energy, the ability to have a vision and guide any project to
						completion.
					</p>
					<p className="text-xs text-right pt-5">
						Nina Lanes - Terra Viva Uniforms Partner
					</p>
				</motion.div>

				<motion.div
					className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-10 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					variants={{
						hidden: { opacity: 0, scale: 0.8 },
						visible: { opacity: 1, scale: 1 },
					}}
				>
					{/* <p className="font-playfair text-6xl mt-5">“</p> */}
					<p className="font-playfair text-6xl">“</p>
					<p className="text-center text-xl">
						Tathyanna’s ability to go above and beyond is incredible. She has
						long-term vision and short-term actions.
						{/* <span className="font-playfair text-6xl">“</span> */}
					</p>
					<p className="text-xs text-right pt-5">
						Emilia Vieira - Staples Animal Hospital Director
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonials;
