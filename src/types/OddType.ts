export class Odd {
  id: string = "";
  sport_key: string = "";
  sport_title: string = "";
  commence_time: string = "";
  home_team: string = "";
  away_team: string = "";
  bookmakers: any;

  constructor(initialize: any) {
    if (initialize.id) {
      this.id = initialize.id;
    }
    if (initialize.sport_key) {
      this.sport_key = initialize.sport_key;
    }
    if (initialize.sport_title) {
      this.sport_title = initialize.sport_title;
    }
    if (initialize.commence_time) {
      this.commence_time = initialize.commence_time;
    }
    if (initialize.home_team) {
      this.home_team = initialize.home_team;
    }
    if (initialize.away_team) {
      this.away_team = initialize.away_team;
    }
    if (initialize.bookmakers) {
      this.bookmakers = initialize.bookmakers;
    }
  }
}
