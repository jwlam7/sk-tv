const API_BASE_URL: string = 'https://api.themoviedb.org/3';
const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

//URLs for korean movies
const KOREAN_MOVIES: string = `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ko&sort_by=vote_count.desc`;
const KOREAN_TOP_TEN_MOVIES: string = `${API_BASE_URL}/movie/{id}?api_key=${API_KEY}`;
//URLs for korean tv series
const KOREAN_TV_SERIES: string = `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=ko&sort_by=vote_count.desc`;
const KOREAN_TOP_TEN_SERIES: string = `${API_BASE_URL}/find/{id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;
//URL for specific movie / tv series
const SPECIFIC_SELECTION: string = `${API_BASE_URL}/{type}/{id}?api_key=${API_KEY}`;

//URL for images
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

export {
	KOREAN_MOVIES,
	KOREAN_TV_SERIES,
	KOREAN_TOP_TEN_MOVIES,
	KOREAN_TOP_TEN_SERIES,
	SPECIFIC_SELECTION,
	IMAGE_BASE_URL
};
