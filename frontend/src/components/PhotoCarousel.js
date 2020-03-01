import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import katz from "../katz's_delicatessen.jpg";
import fitzrovia from "../attendant_fitzrovia.jpg";
import roxie from "../roxie_food_center.jpg";
import '../App.css'

const PhotoCarousel = () => {
  let img1 = {katz};
  let img2 = {fitzrovia};
  let img3 = {roxie};

  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        className="carousel_img"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                className="carousel_img"
                src={katz}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                className="carousel_img"
                src={fitzrovia}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                className="carousel_img"
                src={roxie}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default PhotoCarousel;