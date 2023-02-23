import React from "react";
import { Odd, Sport } from "../../types";

import * as TEST_DATA from "../../test";

const API_URL = "https://api.the-odds-api.com/v4/sports";
const API_KEY = "947a3cf2a3a6377b4c11c9d1b5b2a804"; //70909d75c5b91d9f64b2605657e6620a

const sportUrl = `${API_URL}?apiKey=${API_KEY}`;
const upcomingUrl = `${API_URL}/upcoming/odds/?regions=au&markets=h2h&apiKey=${API_KEY}`;
const oddUrl = (key: string) =>
  `${API_URL}/${key}/odds/?regions=au&markets=h2h&apiKey=${API_KEY}`;

function delay(ms: number) {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

function checkStatus(response: any) {
  if (response.ok) {
    return response;
  } else {
    const htmlErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`HTML Error Info: ${htmlErrorInfo}`);
    throw new Error(htmlErrorInfo.status);
  }
}

function parseJSON(response: Response) {
  return response.json();
}

function convertToSportModel(data: any[]): Sport[] {
  let sports: Sport[] = data.map((sport) => new Sport(sport));
  return sports;
}
function convertToOddModel(data: any[]): Odd[] {
  let odds: Odd[] = data.map((odd) => new Odd(odd));
  return odds;
}

const sportsAPI = {
  get() {
    // return fetch(sportUrl)
    //   .then(checkStatus)
    //   .then(parseJSON)
    //   .then(convertToSportModel)
    //   .catch((error: TypeError) => {
    //     throw new Error(
    //       'There was an error retrieving the sports. Please try again.'
    //     );
    //   });

    return fetch("")
      .then(delay(600))
      .then(() => {
        return TEST_DATA.SPORTS;
      });
  },
};

const upcomingAPI = {
  get() {
    // return fetch(upcomingUrl)
    //   .then(checkStatus)
    //   .then(parseJSON)
    //   .then(convertToOddModel)
    //   .catch((error: TypeError) => {
    //     throw new Error(
    //       'There was an error retrieving the odds. Please try again.'
    //     );
    //   });

    return fetch("")
      .then(delay(600))
      .then(() => {
        return TEST_DATA.UPCOMING;
      });
  },
};

const upcomingBySportAPI = {
  get(key: string | undefined) {
    // return fetch(oddUrl(key))
    //   .then(checkStatus)
    //   .then(parseJSON)
    //   .then(convertToOddModel)
    //   .catch((error: TypeError) => {
    //     throw new Error(
    //       'There was an error retrieving the odds. Please try again.'
    //     );
    //   });

    return fetch("")
      .then(delay(600))
      .then(() => {
        return TEST_DATA.UPCOMING_BY_SPORT;
      });
  },
};

export { sportsAPI, upcomingAPI, upcomingBySportAPI };
