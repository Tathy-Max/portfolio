import React from 'react';
import Resume from '../assets/Maximiano Tathyanna RFSD.pdf';
import Download from '../assets/download.png';

const DR = () => {
	return (
		<div>
			<a className="flex flex-row " href={Resume} download>
				Resume
				<img
					className="h-6 w-6 hover:opacity-40 transition duration-500"
					src={Download}
					alt="download-img"
				/>
			</a>
		</div>
	);
};

export default DR;
