//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import { Navbar } from './components';
import { Movies, TvSeries, TopTenMovies, TopTenTvSeries } from './pages';

const App: React.FC = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Movies />} />
				<Route path='/tv-series' element={<TvSeries />} />
				<Route path='/top-ten-movies' element={<TopTenMovies />} />
				<Route path='/top-ten-tv-series' element={<TopTenTvSeries />} />
			</Routes>
		</Router>
	);
};

export default App;
