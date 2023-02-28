import React from "react";
import TermsAndConditions from "./hero/TermsAndConditions";

interface Carousel {
  active: boolean | undefined;
  src: string;
}

function CarouselItem(props: Carousel) {
  return (
    <div className={props.active ? "carousel-item active" : "carousel-item"}>
      <img
        src={props.src}
        className="d-block w-100 rounded-3 p-2 p-md-3 p-lg-4"
        alt="..."
      ></img>
    </div>
  );
}

const Hero = (props: any) => {
  return (
    <section className="stn-hero">
      <div
        id="carouselIndicators"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <CarouselItem active={true} src="/images/HERO-1.jpg" />
          <CarouselItem active={false} src="/images/HERO-2.jpg" />
          <CarouselItem active={false} src="/images/HERO-3.jpg" />
        </div>
        <div className="carousel-indicators position-absolute top-100 d-none d-md-flex">
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
            className="active rounded-circle btn-secondary"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="rounded-circle btn-secondary"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="rounded-circle btn-secondary"
          ></button>
        </div>
      </div>
      <TermsAndConditions />
    </section>
  );
};

export default Hero;
