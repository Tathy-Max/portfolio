import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

import MenuIcon from '../assets/menu-icon.svg';
import CloseIcon from '../assets/close-icon.svg';

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();
	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? 'text-yellow' : ''
			} hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isDesktop = useMediaQuery('(min-width: 768px)');
	const navbarBackground = isTopOfPage ? '' : 'bg-purple-300';

	return (
		<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
			<div className="flex items-center justify-between mx-auto w-5/6">
				<h4 className="font-playfair text-3xl font-bold">TM</h4>

				{isDesktop ? (
					<div className="flex justify between gap-16 font-poppins text-lg font-semibold text-deep-blue">
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Skills"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Projects"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Testimonials"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Contact"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				) : (
					<button
						className="rounded-full bg-purple-300 p-2"
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<img alt="menu-icon" src={MenuIcon} />
					</button>
				)}

				{/* Mobile menu */}
				{!isDesktop && isMenuToggled && (
					<div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[300px]">
						{/* CLOSE ICON */}
						<div className="flex justify-end p-12">
							<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
								<img alt="close-icon" src={CloseIcon} className="h-8 w-8" />
							</button>
						</div>

						{/* MENU ITEMS */}
						<div className="flex flex-col gap-10 ml-[33%] text-2xl text-purple-300">
							<Link
								page="Home"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Skills"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Projects"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Testimonials"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Contact"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
