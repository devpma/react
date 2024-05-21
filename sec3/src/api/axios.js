import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key:"501f046ac56532884e31d339302bc54b",
        language: "ko-KR"
    }
})

export default instance;
