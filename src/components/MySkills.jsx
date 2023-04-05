import LineGradient from '../components/shared/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import SkillsImg from '../assets/skills.jpg';

const MySkills = () => {
	const isAboveLarge = useMediaQuery('(min-width: 1060px)');
	return (
		<section id="skills" className="pt-10 pb-16">
			{/* HEADER AND IMAGE SECTION */}
			<div className="md:flex md:justify-between md:gap-16 mt-32">
				<motion.div
					className="md:w-1/3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="font-playfair font-semibold text-4xl mb-5">
						MY <span className="text-deep-blue">SKILLS</span>
					</p>
					<LineGradient width="w-1/4" />
					<p className="mt-10 mb-7">
						I am a fast learner by vocation and an organized and collaborative
						team player who enjoys creating a pleasant work environment.
					</p>
				</motion.div>

				<div className="mt-16 md:mt-0">
					{isAboveLarge ? (
						<div
							className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
						>
							<img alt="skills" className="z-10 h-80" src={SkillsImg} />
						</div>
					) : (
						<img alt="skills" className="z-10" src={SkillsImg} />
					)}
				</div>
			</div>

			{/* SKILLS */}
			<div className="md:flex md:justify-between mt-16 gap-32">
				{/* EXPERIENCE */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10 text-deep-blue">
							<p className="font-playfair font-semibold text-5xl">01</p>
							<p className="font-playfair font-semibold text-3xl mt-3">
								Experience
							</p>
						</div>
						<div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
					</div>
					<p className="mt-5">
						My previous experience working as a businesswoman has given me a
						strong understanding of project management and client relations.
					</p>
				</motion.div>

				{/* INNOVATION */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10 text-deep-blue">
							<p className="font-playfair font-semibold text-5xl">02</p>
							<p className="font-playfair font-semibold text-3xl mt-3">
								Innovation
							</p>
						</div>
						<div className="w-1/2 md:w-3/4 h-32 bg-purple-300 absolute right-0 top-0 z-[-1]" />
					</div>
					<p className="mt-5">
						I am able to maintain emotional stability, adapt and be flexible,
						responding quickly to changing circumstances.
					</p>
				</motion.div>
				{/* COMMITMENT */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10 text-deep-blue">
							<p className="font-playfair font-semibold text-5xl">03</p>
							<p className="font-playfair font-semibold text-3xl mt-3">
								Commitment
							</p>
						</div>
						<div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
					</div>
					<p className="mt-5">
						Being a highly motivated and passionate person about what I do, who
						feels comfortable facing challenges, and is eager from start to
						finish to achieve solutions, I make things happen.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default MySkills;
