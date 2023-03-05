import React from "react";
import { Link } from "react-router-dom";
import {
  CashOutIcon,
  InfoIcon,
  RightArrowIcon,
  SGMIcon,
  SportIcon,
} from "../../assets/svg";

const Outcomes = (props: any) => {
  let outcomesHTML;
  if (props.outcomes.length === 2) {
    outcomesHTML = props.outcomes.map(
      (outcome: { name: string; price: number }) => {
        return (
          <div key={outcome.name} className="col p-1 m-0 mb-2 ">
            <button className="btn btn-dark">
              <span className="team">{outcome.name}</span>
              <span className="">
                <span className="d-block">
                  <span className="odd">{outcome.price}</span>
                </span>
              </span>
            </button>
          </div>
        );
      }
    );
  } else if (props.outcomes.length === 3) {
    const allOutcomes = props.outcomes.slice(0, 2); // Take 2 first outcomes
    allOutcomes.splice(1, 0, props.outcomes[2]); // Insert Draw outcome to the outcome list
    outcomesHTML = allOutcomes.map(
      (outcome: { name: string; price: number }) => {
        return (
          <div key={outcome.name} className="col p-1 m-0 mb-2 ">
            <button className="btn btn-dark">
              <span className="team">{outcome.name}</span>
              <span className="">
                <span className="d-block">
                  <span className="odd">{outcome.price}</span>
                </span>
              </span>
            </button>
          </div>
        );
      }
    );
  }
  return outcomesHTML;
};

const Bookmaker = (props: any) => {
  if (props.markets) {
    return (
      <div className="row bookmaker mb-3">
        {props.markets.map((market: any) => {
          return (
            <div key={market.key} className="row m-0 p-0">
              <div className="col-12 bookmaker-info d-flex align-items-center justify-content-between mb-1">
                <div className=" d-flex align-items-center">
                  <div className=" d-flex align-items-center">
                    <span className=" me-2">
                      <InfoIcon />
                    </span>
                  </div>
                  <h3 className="d-flex align-items-center justify-content-center mb-0 text-center">
                    {props.title} <span className="dot"></span> {market.key}
                  </h3>
                </div>
                <div className="">
                  <span></span>
                  <span className=" me-2">
                    <SGMIcon />
                  </span>

                  <span className="">
                    <CashOutIcon />
                  </span>
                </div>
              </div>
              <Outcomes outcomes={market.outcomes} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

function msToTime(duration: number) {
  if (duration < 0) {
    return "See Results";
  }
  let days = Math.floor(duration / (1000 * 60 * 60 * 24));
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);

  if (days > 0) {
    return days + "d " + hours + "h";
  }
  return hours + "h " + minutes + "m";
}

const UpcomingSport = (props: {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: {
    key: string;
    title: string;
    last_update: string;
    markets: { key: string; outcome: { name: string; price: number }[] }[];
  }[];
}) => {
  const commence_time = new Date(props.commence_time);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const msLeft = commence_time.getTime() - today.getTime();

  return (
    <div className="">
      <div className="match border-bottom p-2 mb-3">
        <div className="match-info mb-3">
          <div className="row">
            <div className=" d-flex justify-content-between">
              <a
                className="col-9 d-flex gap-2 justify-content-start align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls={"id" + props.id}
                href={"#id" + props.id}
              >
                <div className="">
                  <div className="">
                    <span className="">
                      <SportIcon />
                    </span>
                  </div>
                </div>
                <div className="">
                  <p className="match-name">
                    {props.home_team} v {props.away_team}
                  </p>
                  <span className="sport-title">
                    {props.sport_title}
                    <span className="dot"></span>
                    <span>
                      {commence_time.toDateString() === today.toDateString()
                        ? "Today"
                        : commence_time.toDateString() ===
                          tomorrow.toDateString()
                        ? "Tomorrow"
                        : commence_time.toDateString()}
                    </span>
                    ,{" "}
                    <span>
                      {String(commence_time.getHours()).padStart(2, "0")}:
                      {String(commence_time.getMinutes()).padStart(2, "0")}
                    </span>
                  </span>
                </div>
              </a>
              <Link
                className="col-3 d-flex gap-2 justify-content-end align-items-center"
                to={"/match/" + props.id}
                state={{
                  sport_key: props.sport_key,
                  sport_title: props.sport_title,
                  commence_time: props.commence_time,
                  home_team: props.home_team,
                  away_team: props.away_team,
                }}
              >
                <div className="">
                  <div className="">
                    <span className="">{msToTime(msLeft)}</span>
                  </div>
                  <span className="">{props.bookmakers.length} Markets</span>
                </div>
                <div className="">
                  <span className="">
                    <RightArrowIcon size={14} />
                  </span>
                </div>
              </Link>
              <div className=""></div>
            </div>
          </div>
        </div>
        <div id={"id" + props.id} className="collapse">
          <div className="bookmakers d-flex flex-column gap-1">
            {props.bookmakers &&
              props.bookmakers.map((bookmaker) => {
                return (
                  <Bookmaker
                    key={bookmaker.key}
                    title={bookmaker.title}
                    markets={bookmaker.markets}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSport;
