import { styled } from "styled-components"
import Banner from '../../components/Banner'
import Row from '../../components/Row'
import requests from '../../api/request'

const index = () => {
  return (
    <div>
      <Container>
        <Banner />
        <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movie" id="AM" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
      </Container>
    </div>
  )
}

const Container = styled.main`
  position:relative;
  display:block;
  top:70px;
  padding:0 calc(3.5vw + 5px);
`

export default index
