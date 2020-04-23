import React from 'react';
import '../styles/Home.css';
import 'font-awesome/css/font-awesome.min.css';
import denver from "../assets/denver.jpg";
import london from "../assets/london.jpg";
import nyc from "../assets/nyc.jpg";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBView} from "mdbreact";

const images = [
  {
    img: denver,
    id: 'DEN'
  },
  {
    img: london,
    id: 'LHR'
  },
  {
    img: nyc,
    id: 'NYC'
  }
];

const HomePageCarousel = (props) => {
  return (
    <MDBContainer className="home-page-carousel-container">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 fill"
        slide
      >
        <MDBCarouselInner className="fill">
          {props.images.map((image, index) => (
            <MDBCarouselItem itemId={index + 1} className="fill">
              <MDBView className="fill">
                <a href={"/locations/" + image.id}>
                  <img
                    className="d-block home-page-carousel-img"
                    src={image.img}
                    alt={image.id}
                  />
                </a>
              </MDBView>
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

const Home = () => {
  return(
    <div className="home-page-split-container">
      <div className="home-page-split-left">
        <div className="home-page-search">
          <div className="title-container">
            <h3>Discover new places and experience cuisines from around the world</h3>
            <p>Search from locations, restaurants, and hotels</p>
          </div>
          <form className="home-page-form-container fill" action="/search?">
            <input name="name" id="textSearch" className="home-search-bar" placeholder="Anywhere" type="text"/>
            <button type="submit" className="home-search-btn">Search</button>
          </form>
        </div>
      </div>
      <div className="home-page-split-right">
        <HomePageCarousel images={images} />
      </div>
    </div>
  );
}

export default Home;
