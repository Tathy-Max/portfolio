import LineGradient from '../components/shared/LineGradient';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const readMore = () => {
	toast.custom((t) => (
		<div
			className={`${
				t.visible ? 'animate-enter' : 'animate-leave'
			} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
		>
			<div className="flex-1 w-0 p-4">
				<div className="flex items-start">
					<div className="flex-shrink-0 pt-0.5">
						<img
							className="h-10 w-10 rounded-full"
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
							alt=""
						/>
					</div>
					<div className="ml-3 flex-1">
						<p className="text-sm font-medium text-gray-900">Emilia Gates</p>
						<p className="mt-1 text-sm text-gray-500">
							Sure! 8:30pm works great!
						</p>
					</div>
				</div>
			</div>
			<div className="flex border-l border-gray-200">
				<button
					onClick={() => toast.dismiss(t.id)}
					className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				>
					Close
				</button>
			</div>
		</div>
	));
};

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
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`; //text that overlays the project image
	const projectTitle = title.split(' ').join('-').toLowerCase();

	return (
		<motion.div variants={projectVariant} className="relative">
			<div className={overlayStyles}>
				<p className="text-2xl font-opensans">{title}</p>
				<p className="mt-3.5">{subtitle}</p>
				<p className="mt-3.5">{more}</p>
				<p className="mt-3.5  font-poppins text-sm rounded-sm py-3 px-5 font-semibold bg-purple-300 text-deep-blue hover:bg-purple-300 hover:text-white hover:bg-gradient-rainblue transition duration-500">
					{link}
				</p>
			</div>
			<img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
		</motion.div>
	);
};

const MyProjects = () => {
	return (
		<section id="projects" className="pt-20 pb-24">
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
				<p className="mt-10 mb-10">
					Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
					fames odio in at. At magna ornare dictum lectus. Purus massa morbi
					purus nec eget eleifend ut elit.
				</p>
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
              max-w-[458px] max-h-[400px] text-2xl font-playfair font-semibold"
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
							Go to Website
						</a>
						more={
							<div>
								<button onClick={readMore}>Read more</button>
								<Toaster position="absolute bottom-9 left-9" />
							</div>
						}
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
					/>

					{/* ROW 2 */}
					<Project
						title="Project 3"
						subtitle="The project is an e-commerce in the travel service area, focused on those who are looking for an experience beyond the traditional packages (inspired by Guess Where Trips)."
					/>
					<Project
						title="Project 4"
						subtitle="The project is a hot site created to support and capture registrations for the annual cybersecurity event of the SOC Brazil community."
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
              max-w-[458.88px] max-h-[400px] text-2xl font-playfair font-semibold"
					>
						SMOOTH USER EXPERIENCE
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default MyProjects;
