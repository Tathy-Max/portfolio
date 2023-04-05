import LineGradient from '../components/shared/LineGradient';
import { motion } from 'framer-motion';
import { useState } from 'react';

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const projectVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, more, link }) => {
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue `; //text that overlays the project image
	const projectTitle = title.split(' ').join('-').toLowerCase();

	return (
		<motion.div variants={projectVariant} className="relative">
			<div className={overlayStyles}>
				<p className="pt-5 text-2xl font-opensans">{title}</p>
				<p className="mt-2 text-sm">
					{subtitle}
					<div>{more}</div>
				</p>

				<p className="mt-2 font-poppins text-xs rounded-sm p-2.5 font-semibold bg-purple-300 text-deep-blue  hover:text-white hover:bg-gradient-rainblue transition duration-500">
					{link}
				</p>
			</div>
			<img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
		</motion.div>
	);
};

const ReadMorereadLess = ({ limit, children }) => {
	const text = children;
	const [isReadMoreShown, setIsReadMoreShown] = useState(false);
	const toggleBtn = () => {
		setIsReadMoreShown((prevState) => !prevState);
	};

	return (
		<div>
			{isReadMoreShown ? text : text.substr(0, limit)}
			<button className="text-fuchsia-600" onClick={toggleBtn}>
				{' '}
				{isReadMoreShown ? '...Read less' : '...Read more'}
			</button>
		</div>
	);
};

const MyProjects = () => {
	return (
		<section id="projects" className="pt-28 pb-24">
			<motion.div
				className="md:w-2/5 mx-auto text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className="font-playfair font-semibold text-4xl text-deep-blue">
						<span className="text-white">PRO</span>JECTS
					</p>
					<div className="flex justify-center mt-5">
						<LineGradient width="w-1/4" />
					</div>
				</div>
				<p className="mt-10 mb-10">Some of the work I've been done so far.</p>
			</motion.div>

			{/* Parent component */}
			<div className="flex justify-center">
				<motion.div
					className="sm:grid sm:grid-cols-3"
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{/* ROW 1 */}
					<div
						className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[558px] max-h-[400px] text-2xl font-playfair font-semibold"
					>
						BEAUTIFUL USER INTERFACES
					</div>
					<Project
						title="Project 1"
						subtitle="The “Guess the Song” is a game built as the very first project of the Ironhack Full Stack Web Development Bootcamp. The game's goal is to guess the song's names throughout hints, reaching the end of the game's fourth round, holding the maximum score as possible."
						link=<a
							href={'https://tathy-max.github.io/game---guess-the-song-/'}
							className="mt-7"
							target="blank"
							rel="noreferrer"
						>
							Go to website
						</a>
						more=<ReadMorereadLess limit={0}>
							HTML, CSS, and Vanilla JavaScript to build the game without
							additional frameworks, and applying OOP concepts and DOM
							manipulation to make the game’s interactions. For each round,
							functions and events are called to iterate through an array (JSON
							file) that contains the information for all game’s songs.
						</ReadMorereadLess>
					></Project>

					<Project
						title="Project 2"
						subtitle="Built as the second project of the Ironhack Full Stack Web Development Bootcamp, “Catch Your Cat” allows people to find out which cat breed is more suitable to their lifestyle and personal circumstances."
						link=<a
							href={'https://catchyourcat.netlify.app/'}
							className="mt-7"
							target="blank"
							rel="noreferrer"
						>
							Go to website
						</a>
						more=<ReadMorereadLess limit={0}>
							Use of the external Cat Public API to retrieve all cats' breeds
							and their relevant information. The projects' APISearch component
							mainly dictates the logic of the matching process. All the User
							Interface has been developed (responsively for mobile and desktop)
							with React, and the project's CRUD schema is mainly based on the
							consumption of data (GET) from the Cat API (manipulating JSON
							files) and full-CRUD from/to a dedicated API which stores users'
							replies and results.
						</ReadMorereadLess>
					/>

					{/* ROW 2 */}
					<Project
						title="Project 3"
						subtitle="The project is an e-commerce in the travel service area, focused on those who are looking for an experience beyond the traditional packages (inspired by Guess Where Trips)."
						link=<a
							href={'https://wtg-ecommerce.netlify.app/'}
							className="mt-7"
							target="blank"
							rel="noreferrer"
						>
							Go to website
						</a>
						more=<ReadMorereadLess limit={0}>
							Authentication and management of multiple profiles with different
							actions and pages for admins and users were the highlights of this
							project. The store’s shopping-cart was built using the
							react-use-cart (a lightweight shopping cart hook). Also, the
							project included many full-CRUDS to manage users, trips, orders.
							The project's stack is React.js, Node.js, Express.js, MongoDB, AWS
							Server.
						</ReadMorereadLess>
					/>
					<Project
						title="Project 4"
						subtitle="The project is a hot site created to support and capture registrations for the annual cybersecurity event of the SOC Brazil community."
						link=<a
							href={'https://main.d3t11wju66tnxq.amplifyapp.com/'}
							className="mt-7"
							target="blank"
							rel="noreferrer"
						>
							Go to website
						</a>
						more=<ReadMorereadLess limit={0}>
							A single page application developed according to a figma design,
							providing information based on a json file.
						</ReadMorereadLess>
					/>
					<Project
						title="Project 5"
						subtitle="The “Guess the Song” is a game built as the very first project of the Ironhack Full Stack Web Development Bootcamp. The game's goal is to guess the song's names throughout hints, reaching the end of the game's fourth round, holding the maximum score as possible."
					/>

					{/* ROW 3 */}
					<Project
						title="Project 6"
						subtitle="Built as the second project of the Ironhack Full Stack Web Development Bootcamp, “Catch Your Cat” allows people to find out which cat breed is more suitable to their lifestyle and personal circumstances."
					/>

					<Project
						title="Project 7"
						subtitle="The project is an e-commerce in the travel service area, focused on those who are looking for an experience beyond the traditional packages (inspired by Guess Where Trips)."
					/>
					<div
						className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[558px] max-h-[400px] text-2xl font-playfair font-semibold"
					>
						SMOOTH USER EXPERIENCE
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default MyProjects;
