import LinkedinIcon from '../../assets/linkedin.png';
import TwiterIcon from '../../assets/twitter.png';
import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';
import GitHubIcon from '../../assets/github.png';

const SocialMediaIcons = () => {
	return (
		<div className="flex justify-center md:justify-start my-10 gap-7">
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.linkedin.com/in/tathy/"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="linkedin-link" src={LinkedinIcon} />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://github.com/Tathy-Max"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="github-link" src={GitHubIcon} />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://twitter.com/tathyanna"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="twitter-link" src={TwiterIcon} />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.facebook.com/tathyanna.maximiano"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="facebook-link" src={FacebookIcon} />
			</a>
			<a
				className="hover:opacity-50 transition duration-500"
				href="https://www.instagram.com/tathyanna_maximiano/"
				target="_blank"
				rel="noreferrer"
			>
				<img alt="instagram-link" src={InstagramIcon} />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
