import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { PARSE_LINK } from '../../helpers';

const PlanetCard = ({ planet }) => {
	return (
		<Link to={PARSE_LINK(planet.name)}>
			<Card href=''>
				<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{planet.name}
				</h5>
				<p className='font-normal text-gray-700 dark:text-gray-400'>
					Population: {planet.population}
				</p>
			</Card>
		</Link>
	);
};

export default PlanetCard;
