import styled from 'styled-components';
import NewArrivals from '../Components/NewArrivals';
import BestSellers from '../Components/BestSellers';
import BrandStory from '../Components/BrandStory';
import { bestSellersInDB, brandStoryInDB, cozy_imagesInDB, newArrivalsInDB } from '../DB/db';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CarouselImg = styled.img`
  height: 500px;
  width: 100vw;
  object-fit: cover;
  object-position: top;
`;

const CarouselTextBox = styled.div`
  position: absolute;
  width: 100%;
  top: 32%;
  padding-left: 20%;
  text-shadow: 0 1px 20px rgba(200, 190, 180, 1);

  #carousel-text1 {
    font-family: 'Pretendard-Bold';
    font-size: 3.7rem;
    font-weight: 600;
    color: white;
    padding: 0px 0px 20px 0px;
  }

  #carousel-text2 {
    font-family: 'Pretendard-Thin';
    font-size: 1.6rem;
    color: white;
    text-shadow: 0.1px 0.1px 0.5px white;
  }

  @media (max-width: 768px) {
    padding-left: 0px;
    text-align: center;
  }
`;

const NewArrivalsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  height: auto;
  max-width: 1000px;
  margin-bottom: 100px;
  gap: 10px;
  padding: 40px;
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 0px;
  }
`;

const NewArrivalsFont = styled.div`
  font-family: 'Bodoni Moda', serif;
  font-size: 3rem;
  color: #e4742a;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const BestSellersContainer = styled(NewArrivalsContainer)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const BestSellersFont = styled(NewArrivalsFont)`
  margin-bottom: 0px;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const BrandStoryContainer = styled.div`
  max-width: 1000px;
`;

const CarouselBox = styled.div`
  position: relative;
  width: 100%;
`;

function Home() {
  return (
    <HomeContainer>
      <CarouselBox>
        <CarouselImg src={cozy_imagesInDB[1].imgUrl} alt='제목없음' />
        <CarouselTextBox>
          <pre id='carousel-text1'>{cozy_imagesInDB[1].text1}</pre>
          <p id='carousel-text2'>{cozy_imagesInDB[1].text2}</p>
        </CarouselTextBox>
      </CarouselBox>
      <NewArrivalsFont>New Arrivals</NewArrivalsFont>
      <NewArrivalsContainer>
        {newArrivalsInDB.map((v, i) => (
          <NewArrivals key={i} id={v.id} imageUrl={v.imgUrl} price={v.price} title={v.title} />
        ))}
      </NewArrivalsContainer>
      <BestSellersContainer>
        <BestSellersFont>Best Sellers</BestSellersFont>
        {bestSellersInDB.map((v, i) => (
          <BestSellers key={i} id={v.id} imageUrl={v.imgUrl} price={v.price} title={v.title} />
        ))}
      </BestSellersContainer>
      <BrandStoryContainer>
        {brandStoryInDB.map((v, i) => (
          <BrandStory key={i} imageUrl={v.imgUrl} overview={v.overview} title={v.title} />
        ))}
      </BrandStoryContainer>
    </HomeContainer>
  );
}

export default Home;
