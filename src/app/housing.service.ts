import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  constructor() {}
  //mock data api
  url = "http://localhost:3000/locations";
  /**
   * Retrieves all the housing locations.
   *
   * @returns {HousingLocation[]} The list of housing locations.
   */

  //get all data
  //return type Promise
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    //call api end point
    const data = await fetch(this.url);
    //if no data return empty array
    return (await data.json()) ?? [];
  }

  //get data by id
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    //call api end point
    const data = await fetch(`${this.url}/${id}`);

    //if no data return empty array
    return (await data.json()) ?? [];
  }

  //get data from submit form
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log("formServices=>", firstName, lastName, email);
  }
}
