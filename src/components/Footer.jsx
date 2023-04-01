import SocialMediaIcons from '../components/shared/SocialMediaIcons';

const Footer = () => {
	return (
		<footer className="h-52 bg-deep-blue pt-10">
			<div className="w-10/12 mx-auto">
				<SocialMediaIcons />
				<div className="md:flex justify-center md:justify-between text-center ">
					<p className="font-playfair font-semibold text-2xl text-yellow">
						TATHY MAX
					</p>
					<p className="font-playfair text-md text-yellow">
						©2023 MAX. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
