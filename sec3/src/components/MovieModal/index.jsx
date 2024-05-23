/* eslint-disable react/prop-types */
import { imgBasePath } from '../constant';
import './MovieModal.css';
import { useRef } from 'react';
import useOneClickOutside from '../../hooks/useOnClickOutside';

const genreMapping = {
    28: '액션',
    12: '모험',
    16: '애니메이션',
    35: '코미디',
    80: '범죄',
    99: '다큐멘터리',
    18: '드라마',
    10751: '가족',
    14: '판타지',
    36: '역사',
    27: '공포',
    10402: '음악',
    9648: '미스터리',
    10749: '로맨스',
    878: 'SF',
    10770: 'TV 영화',
    53: '스릴러',
    10752: '전쟁',
    37: '서부'
};

const getGenreNames = (ids) => {
    return ids.map(id => genreMapping[id]).join(', ');
};

const MovieModal = ({ backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setModalOpen, genre_ids }) => {
    const ref = useRef(null);
    useOneClickOutside(ref, () => {
        setModalOpen(false);
    });

    const genreNames = getGenreNames(genre_ids);

    return (
        <div className='presentation' role="presentation">
            <div className='wrapper-modal'>
                <div className='modal' ref={ref}>
                    <span className='modal-close' onClick={() => setModalOpen(false)}>X</span>
                    <img className='modal__poster-img' src={`${imgBasePath}${backdrop_path}`} alt="model_poster-img"/>
                    <div className='modal__details'>
                        <p><strong>Release Date:</strong> {release_date || first_air_date}</p>
                        <h2 className="modal__title">{title ? title : name}</h2>
                        <p className='modal__overview'>평점: {vote_average}</p>
                        <p className='modal__genre'>{genreNames}</p>
                        <p className='modal__overview'>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
