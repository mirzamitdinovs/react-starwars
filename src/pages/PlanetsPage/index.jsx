import { Pagination } from 'flowbite-react';
import React, { useContext } from 'react';
import Loader from '../../components/Loader';
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
			<div className='flex items-center justify-center text-center'>
				<Pagination
					currentPage={
						planets.next ? planets.next.slice(-1) - 1 : planets.count / 10
					}
					layout='navigation'
					totalPages={planets.count / 10}
					onPageChange={(p) => getPlanets(p)}
				/>
			</div>
		</div>
	);
};

export default PlanetsPage;
