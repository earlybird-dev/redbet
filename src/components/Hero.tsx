import React from "react";
import { PromoIcon } from "../assets/svg";

interface Carousel {
  active: boolean | undefined;
  src: string;
  title: string;
  body: string;
}

function CarouselItem(props: Carousel) {
  return (
    <div className={props.active ? "carousel-item active" : "carousel-item"}>
      <img src={props.src} className="d-block w-100" alt="..."></img>
      <div className="carousel-caption container p-4">
        <div className="row gx-5">
          <div className="col-12 col-lg-6">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className="row flex-fill">
              <div className="col">
                <a className="btn" href="/promos">
                  <span className="promo-icon me-1">
                    <PromoIcon />
                  </span>
                  See all promos
                </a>
              </div>
              <div className="col ">
                <a className="btn" href="/signup">
                  Sign up today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Hero = (props: any) => {
  return (
    <section className="stn-hero">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <CarouselItem
            active={true}
            src="/images/Generic-BTE-CDESK.png"
            title="BEST TOTE EXOTICS ON EVERY RACE"
            body="This Saturday on All Races at Kembla Grange & Ballarat."
          />
          <CarouselItem
            active={false}
            src="/images/WorldCup-CDESK.jpg"
            title="WORLD CUP - SCORE FIRST YOU WIN"
            body="Early Payout: On Australia Matches in Group Stage, if your selection scores the first goal of the match we'll pay you out as a winner. First $50 staked."
          />
          <CarouselItem
            active={false}
            src="/images/22MBS-CDESK.png"
            title="BONUS BACK TO 4TH EVERY DAY"
            body="Run 2nd, 3rd or 4th in selected races every day and get Bonus back up to $50."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
