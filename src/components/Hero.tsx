import React from "react";
import HeroModal from "./hero/HeroModal";
import TermsAndConditions from "./hero/TermsAndConditions";

interface Carousel {
  id: string;
  active: boolean | undefined;
  src: string;
}

function CarouselItem(props: Carousel) {
  return (
    <div
      className={
        props.active
          ? "active carousel-item w-100 p-3 p-md-0"
          : "carousel-item w-100 p-3 p-md-0"
      }
    >
      <button
        type="button"
        className="border-0 rounded-3 p-0 m-0 w-100"
        data-bs-toggle="modal"
        data-bs-target={"#" + props.id}
      >
        <img src={props.src} className="d-block w-100 " alt="..."></img>
      </button>
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
          <CarouselItem id="hero-1" active={true} src="/images/HERO-1.jpg" />
          <HeroModal id="hero-1" title="HERO-1" src="/images/HERO-1-1.jpg" />
          <CarouselItem id="hero-2" active={false} src="/images/HERO-2.jpg" />
          <HeroModal id="hero-2" title="HERO-2" src="/images/HERO-2-2.jpg" />
          <CarouselItem id="hero-3" active={false} src="/images/HERO-3.jpg" />
          <HeroModal id="hero-3" title="HERO-3" src="/images/HERO-3-3.jpg" />
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
    </section>
  );
};

export default Hero;
