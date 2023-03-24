import { useState, useEffect } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import DotScroll from './components/DotScroll';

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
			</div>
		</div>
	);
}

export default App;
