import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { imgBasePath } from "../../components/constant";

const Index = () => {
  const { movieId } = useParams(); // useParams 훅을 사용하여 movieId 추출
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() { // 함수 이름을 fetchData로 수정
      try {
        const response = await axios.get(
          `/movie/${movieId}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchData(); // fetchData 함수 호출
  }, [movieId]); // movieId가 변경될 때마다 useEffect 실행

  if (!movie) return null;

  return (
    <section>
      <img src={`${imgBasePath}${movie.backdrop_path}`} alt="detail" />
    </section>
  );
};

export default Index;
