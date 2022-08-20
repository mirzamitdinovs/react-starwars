import { useState, useEffect, createContext } from 'react';
import { GET_ALL_PLANETS } from '../services';

const PlanetsContext = createContext();

export const PlanetsProvider = ({ children }) => {
	const [planets, setPlanets] = useState(null);

	useEffect(() => {
		if (!planets) {
			fetchData(1);
		}
	}, []);

	const fetchData = async (page) => {
		const res = await GET_ALL_PLANETS(page);
		if (res) {
			setPlanets(res);
		}
	};

	return (
		<PlanetsContext.Provider
			value={{
				planets: planets,
				getPlanets: fetchData,
			}}
		>
			{children}
		</PlanetsContext.Provider>
	);
};

export default PlanetsContext;
