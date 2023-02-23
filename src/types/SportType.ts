export class Sport {
  active: boolean | undefined;
  description: string = "";
  group: string = "";
  has_outrights: boolean | undefined;
  key: string = "";
  title: string = "";

  constructor(initialize: any) {
    if (initialize.active) {
      this.active = initialize.active;
    }
    if (initialize.description) {
      this.description = initialize.description;
    }
    if (initialize.group) {
      this.group = initialize.group;
    }
    if (initialize.has_outrights) {
      this.has_outrights = initialize.has_outrights;
    }
    if (initialize.key) {
      this.key = initialize.key;
    }
    if (initialize.key) {
      this.key = initialize.key;
    }
  }
}
