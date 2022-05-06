//Components
import { Button, Grid, GridItem, HeroImage, Spinner } from '../components';
//custom hook
import useFetchMovies from '../hooks/useFetchMovies';

const Movies: React.FC = () => {
	const { state, loading, error, setLoadMore } = useFetchMovies();
	console.log(state);

	if (error) return <div>Something went wrong...</div>;

	return (
		<main>
			{loading && <Spinner />}
			{state.results[0] && (
				<>
					<HeroImage
						backdrop_path={state.results[0].backdrop_path}
						title={state.results[0].title}
						overview={state.results[0].overview}
					/>
					<Grid page='Movies'>
						{state.results.map((movie) => 
							<GridItem 
								key={movie.id} 
								id={movie.id} 
								poster_path={movie.poster_path} 
								type='movie'
							/>
						)}
					</Grid>
					{state.page < state.total_pages && (
						loading 
							? <Spinner replaceButton={true}/>
							: <Button callback={()=>setLoadMore(true)}/>
						)
					}
				</>
			)}
		</main>
	);
};

export default Movies;