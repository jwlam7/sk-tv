//Query
import { useQueries } from 'react-query';
//API
import { fetchTopTenSeries } from '../api/api';
//custom hook
import { useTopTenContext } from '../context/topTenContext';

const useFetchTopTenSeries = () => {
	const { imdbSeriesIds } = useTopTenContext();

	return useQueries(
		Object.values(imdbSeriesIds).map((id) => {
			return {
				queryKey: [ 'top-ten-series', id ],
				queryFn: () => fetchTopTenSeries(id)
			};
		})
	);
};

export default useFetchTopTenSeries;
