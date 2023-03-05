import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { upcomingAPI } from "../../config/api";
import { Odd } from "../../types";
import { LeftArrowIcon, RightArrowIcon, SportIcon } from "../../assets/svg";

import Loading from "../../utils/Loading";
import UpcomingSport from "./UpcomingSport";

const Home = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [upcomingMatches, setUpcomingMatches] = useState<Odd[]>([]);
  const [upcomingSports, setUpcomingSports] = useState<
    { sport_key: string; sport_title: string }[]
  >([]);

  useEffect(() => {
    async function getUpcomingMatches() {
      setLoading(true);
      try {
        const data = await upcomingAPI.get();
        console.log("data", data);
        setUpcomingMatches(data);

        let sportList;
        sportList = data.map((match) => {
          return {
            sport_key: match.sport_key,
            sport_title: match.sport_title,
          };
        });

        let unique: any = {};
        let distinctSportList: {
          sport_key: string;
          sport_title: string;
        }[] = [];
        for (let i = 0; i < sportList.length; i++) {
          if (!unique[sportList[i].sport_key]) {
            distinctSportList.push(sportList[i]);
            unique[sportList[i].sport_key] = true;
          }
        }
        console.log("unique", unique);

        setUpcomingSports(distinctSportList);
      } finally {
        setLoading(false);
      }
    }
    getUpcomingMatches();
  }, []);

  const SportFilter = () => {
    const ScrollButton = (direction: "left" | "right") => {
      const sportList: HTMLElement | null =
        document.getElementById("sport-list");
      const scrollRightBtn: HTMLElement | null =
        document.getElementById("scroll-right-btn");
      const scrollLeftBtn: HTMLElement | null =
        document.getElementById("scroll-left-btn");

      sportList &&
        sportList.scrollBy({
          top: 0,
          left: direction === "right" ? +1000 : -1000,
          behavior: "smooth",
        });

      if (direction === "right") {
        scrollLeftBtn && scrollLeftBtn.classList.remove("d-none");
        scrollRightBtn && scrollRightBtn.classList.add("d-none");
      } else {
        scrollLeftBtn && scrollLeftBtn.classList.add("d-none");
        scrollRightBtn && scrollRightBtn.classList.remove("d-none");
      }
    };
    const ScrollRight = () => {
      ScrollButton("right");
    };
    const ScrollLeft = () => {
      ScrollButton("left");
    };

    return (
      <div id="sport-filter" className=" my-4">
        <div className="d-flex flex-row justify-content-between">
          <button
            id="scroll-left-btn"
            className="scroll-btn scroll-btn-left me-3 p-0 d-none"
            aria-label="Scroll left"
            data-test="leftArrowTabButton"
            onClick={ScrollLeft}
          >
            <span className="m-0 p-0">
              <LeftArrowIcon size={14} />
            </span>
          </button>
          <div
            id="sport-list"
            className="d-flex flex-row gap-1 mx-1 flex-grow-1 overflow-auto"
          >
            {upcomingSports.map((sport: any) => {
              return (
                <Link key={sport.sport_key} to={"/sports/" + sport.sport_key}>
                  <button className="btn btn-dark sport-btn ">
                    <span className="">
                      <span>
                        <span className="me-2">
                          <SportIcon />
                        </span>
                      </span>
                    </span>
                    <span className="">{sport.sport_title}</span>
                  </button>
                </Link>
              );
            })}
          </div>
          <button
            id="scroll-right-btn"
            className="scroll-btn scroll-btn-right ms-3 p-0"
            aria-label="Scroll right"
            data-test="rightArrowTabButton"
            onClick={ScrollRight}
          >
            <span className="m-0 p-0">
              <RightArrowIcon size={14} />
            </span>
          </button>
        </div>
      </div>
    );
  };

  const FilterUpcomingMatches = (props: any) => {
    const upcomingSports = props.upcomingMatches.map((match: any) => {
      const commence_time = new Date(match.commence_time);
      const today = new Date();
      // if (commence_time.getTime() < today.getTime()) {
      //   return;
      // }
      return (
        <UpcomingSport
          key={match.id}
          id={match.id}
          sport_key={match.sport_key}
          sport_title={match.sport_title}
          home_team={match.home_team}
          away_team={match.away_team}
          commence_time={match.commence_time}
          bookmakers={match.bookmakers}
        />
      );
    });

    return (
      <>
        <SportFilter />
        {upcomingSports}
      </>
    );
  };

  return (
    <section className="stn-upcoming container p-0 mt-2 mt-md-5">
      <div className="min-vh-100 p-0 mb-3 ">
        <div className="row g-2">
          <div id="upcoming" className="col-12 col-lg-8">
            <div className="bg-black rounded p-2 p-md-3 p-lg-4 ">
              <h1 className="text-white">Upcoming</h1>
              {loading ? (
                <Loading />
              ) : (
                <FilterUpcomingMatches upcomingMatches={upcomingMatches} />
              )}
            </div>
          </div>
          <div id="next" className="col-12 col-lg-4">
            <div className="bg-black rounded p-2 p-md-3 p-lg-4">
              <nav className="nav nav-justified">
                <a className="nav-link active p-0" aria-current="page" href="#">
                  <h1>NEXT RACING</h1>
                </a>
                <a className="nav-link p-0" href="#">
                  <h1>NEXT SPORTS</h1>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
