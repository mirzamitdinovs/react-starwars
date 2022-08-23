import React from 'react';

const ImageCard = ({ image }) => {
	return (
		<div className='rounded-2xl  overflow-hidden hover:scale-105 ease-in duration-300'>
			<img
				src={image.src.landscape}
				alt={'pexels'}
				// className='hover:scale-125'
			/>
		</div>
	);
};

export default ImageCard;
