import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import '../styles/InstanceListing.css';

const PhotoCarousel = (props) => {
  const src = props.images[0];
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
                src={src}
                alt="1"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                className="carousel_img"
                src={src}
                alt="2"
              />
            </MDBView>
          </MDBCarouselItem><MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              className="carousel_img"
              src={src}
              alt="3"
            />
          </MDBView>
        </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default PhotoCarousel;