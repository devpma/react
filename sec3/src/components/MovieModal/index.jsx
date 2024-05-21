/* eslint-disable react/prop-types */
import React from 'react';
import { imgBasePath } from '../constant';
import './MovieModal.css'
import { useRef } from 'react';

const MovieModal = ({backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setModalOpen}) => {

    const ref = useRef(null);

    return (
        <div className='presentation' role="presentation">
            <div className='wrapper-modal'>
                <div className='modal' ref={ref}>
                    <span className='modal-close' onClick={() => setModalOpen(false)}>X</span>
                    <img className='modal__poster-img' src={`${imgBasePath}${backdrop_path}`} alt="model_poster-img"/>
                    <p className='modal__details'>
                        <span>
                            100% for you
                        </span>
                        <p><strong>Release Date:</strong> {release_date || first_air_date}</p>
                        <h2 className="modal__title">{title ? title : name}</h2>
                        <p className='modal__overview'>평점: {vote_average}</p>
                        <p className='modal__overview'>{overview}</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
