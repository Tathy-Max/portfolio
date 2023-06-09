import SocialMediaIcons from './shared/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Tathy from '../assets/tathy princess.JPG';
import DR from '../components/DR';
import DevIcons from './shared/DevIcons';
import LineGradient from './shared/LineGradient';

const Home = ({ setSelectedPage }) => {
	const isAboveLarge = useMediaQuery('(min-width: 1060px)');
	return (
		<section
			id="home"
			className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
		>
			{/* IMAGE SECTION */}
			<div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
				{isAboveLarge ? (
					<div
						className="relative z-0 ml-20 before:absolute before:-top-16 before:-left-20 before:rounded-t-[200px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
					>
						<img
							alt="profile"
							className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[200px]"
							src={Tathy}
						/>
					</div>
				) : (
					<img
						alt="profile"
						className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[200px]"
						src={Tathy}
					/>
				)}
			</div>

			{/* MAIN TEXT */}
			<div className="z-30 basis-2/5 mt-12 md:mt-32">
				{/* HEADINGS */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="text-6xl font-playfair z-10 text-center md:text-start">
						Tathy {''}
						<span
							className="xs:relative text-deep-blue font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[8px] before:-top-[35px] before:z-[-1]"
						>
							Max
						</span>
					</p>

					<p className="mt-10 mb-7 text-md text-center md:text-start">
						I'm a landed Canadian immigrant fast learner{' '}
						<span className="text-xl text-red font-semibold font-opensans ">
							Junior Web Developer
						</span>{' '}
						passionate about solving problems using coding to achieve the best
						results.
					</p>
				</motion.div>

				{/* CALL TO ACTIONS */}
				<motion.div
					className="flex mt-5 justify-center md:justify-start"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<div
						className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
					>
						<DR />
					</div>
					<AnchorLink
						className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
						onClick={() => setSelectedPage('contact')}
						href="#contact"
					>
						<div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
							Let's talk.
						</div>
					</AnchorLink>
				</motion.div>

				<motion.div
					className="flex mt-5 justify-center md:justify-start"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<SocialMediaIcons />
				</motion.div>
				<LineGradient width="w-5/12" />
				<DevIcons />
			</div>
		</section>
	);
};

export default Home;
