import React, { useContext } from 'react';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import PlanetCard from '../../components/PlanetCard';
import PlanetsContext from '../../contexts/PlanetsContext';
const PlanetsPage = () => {
	const { planets, getPlanets } = useContext(PlanetsContext);

	if (!planets) return <Loader />;
	return (
		<div className='mt-10'>
			<h4 className='text-3xl text-center font-semibold text-blue-700'>
				Planets List
			</h4>
			<div className='grid grid-cols-4 gap-4 my-10'>
				{planets.results?.map((item, index) => (
					<PlanetCard key={index} planet={item} />
				))}
			</div>
			<Pagination
				current={planets.next ? planets.next.slice(-1) - 1 : planets.count / 10}
				total={planets.count / 10}
				getData={(p) => getPlanets(p)}
			/>
		</div>
	);
};

export default PlanetsPage;
