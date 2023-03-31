import { useState, useEffect } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import DotScroll from './components/DotScroll';
import Home from './components/Home';
import LineGradient from './components/shared/LineGradient';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Testimonials from './components/Testimonials';
import ContactMe from './components/ContactMe';
import { motion } from 'framer-motion';

function App() {
	const [selectedPage, setSelectedPage] = useState('home');
	const [isTopOfPage, setIsTopOfPage] = useState(true);
	const isDesktop = useMediaQuery('(min-width: 1060px)');

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage('home');
			}
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="app bg-baby-purple">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div className="w-5/6 mx-auto md:h-full">
				{isDesktop && (
					<DotScroll
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)}
				<motion.div
					margin="0 0 -200px 0"
					amount="all"
					onViewportEnter={() => setSelectedPage('home')}
				>
					<Home setSelectedPage={setSelectedPage} />
				</motion.div>
			</div>
			<LineGradient />
			<div className="w-5/6 mx-auto md:h-full ">
				<motion.div
					margin="0 0 -200px 0"
					amount="all"
					onViewportEnter={() => setSelectedPage('skills')}
				>
					<MySkills />
				</motion.div>
			</div>
			<LineGradient />
			<div className="w-5/6 mx-auto">
				<motion.div
					margin="0 0 -200px 0"
					amount="all"
					onViewportEnter={() => setSelectedPage('projects')}
				>
					<MyProjects />
				</motion.div>
			</div>
			<LineGradient />
			<div className="w-5/6 mx-auto md:h-full">
				<motion.div
					margin="0 0 -200px 0"
					amount="all"
					onViewportEnter={() => setSelectedPage('testimonials')}
				>
					<Testimonials />
				</motion.div>
			</div>
			<LineGradient />
			<div className="w-5/6 mx-auto md:h-full">
				<motion.div
					margin="0 0 -200px 0"
					amount="all"
					onViewportEnter={() => setSelectedPage('contact')}
				>
					<ContactMe />
				</motion.div>
			</div>
		</div>
	);
}

export default App;
