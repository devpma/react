import { useState } from "react";
import styled from "styled-components";


function Gallery() {
    const [search, setSearch] = useState('')
    const [list, setList] = useState([])

    const fetchPhotos = async (query) => {
        const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
        const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            setList(data.results);
        } catch (error) {
            console.error('Error fetching photos:', error);
            setList([]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (search) fetchPhotos(search);
    };

    return (
        <>
            <GalleryWrap>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={search} placeholder="search for images" onChange={(e) => setSearch(e.target.value)}/>
                    <button type="submit">검색</button>
                </form>
                <ul>
                {list.map(photo => (
                    <Photo key={photo.id} >
                        <img src={photo.urls.small} alt={photo.alt} />
                    </Photo>
                ))}
                </ul>
            </GalleryWrap>
        </>
    )
}


const GalleryWrap = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    input {
        border:1px solid #555;
        padding:10px;
        box-sizing:border-box;
        width:200px;
        height:50px;
        border-radius:5px;
    }
    button {
        height:50px;
        border-radius:5px;
        background:#333;
        color:#fff;
        padding:0 20px;
        margin-left:5px;
        border:none;
        font-size:14px;
    }
`

const Photo = styled.div`
img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}
`


export default Gallery
