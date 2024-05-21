import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import instance from '../../api/axios';
import './SearchPage.css'
import { useDebounce } from '../../hooks/useDebounce';

const Index = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);
  let query = useQuery();
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce(query.get('q'));
  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await instance.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
      console.log(response.data); // response의 data 부분만 출력
    } catch (error) {
      console.log(error.message); // 에러 메시지 출력
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  if(searchResults.length > 0) {
    return (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== 'person' ){
            const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className='movie' key={movie.id}>
                <div onClick={() => navigate(`/${movie.id}`)} className='movie__column-poster'>
                  <img src={movieImageUrl} alt="movie" className='movie__poster' />
                </div>
              </div>
            )
          }
        })}
      </section>
    );

  } else {
    return (
      <section className='no-result'>
        <div className='no-result-text'>
          <p>찾고자하는 검색어 {searchTerm} 에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  }
}

export default Index;
