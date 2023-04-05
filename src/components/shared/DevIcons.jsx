import HtmlIcon from '../../assets/html5-original.svg';
import CssIcon from '../../assets/css3-original.svg';
import JsIcon from '../../assets/javascript-plain.svg';
import TsIcon from '../../assets/typescript-plain.svg';
import ReactIcon from '../../assets/react-original.svg';
import NodeIcon from '../../assets/nodejs-original.svg';
import ExpressIcon from '../../assets/express-original.svg';
import MongoIcon from '../../assets/mongodb-original.svg';
import TailwindIcon from '../../assets/tailwindcss-plain.svg';
import BootIcon from '../../assets/bootstrap-original.svg';

const DevIcons = () => {
	return (
		<div className="flex justify-center md:justify-start mt-48 gap-3">
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px] animate-pulse"
				src={HtmlIcon}
				alt="html-icon"
			></img>
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px]"
				src={CssIcon}
				alt="css-icon"
			></img>
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px] animate-pulse"
				src={JsIcon}
				alt="js-icon"
			></img>
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px]"
				src={TsIcon}
				alt="ts-icon"
			></img>
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px] animate-pulse"
				src={ReactIcon}
				alt="react-icon"
			></img>
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px]"
				src={NodeIcon}
				alt="node-icon"
			></img>
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px] animate-pulse"
				src={ExpressIcon}
				alt="express-icon"
			></img>
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px]"
				src={MongoIcon}
				alt="mongo-icon"
			></img>
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px] animate-pulse"
				src={TailwindIcon}
				alt="tailwind-icon"
			></img>
			<img
				className="transition duration-500 hover:scale-150 h-[42px] w-[42px]"
				src={BootIcon}
				alt="boot-icon"
			></img>
		</div>
	);
};

export default DevIcons;
