import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <!-- add # to make it a reference aka template variable-->
        <input type="text" placeholder="Filer by city" #filter />
        <!-- add (click) input value from #filter -->
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <!-- change src of list for loop -->
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocation[]) => {
        // store data in local variable
        this.housingLocationList = housingLocationList;
        // data use for loop = data that stored
        this.filteredLocationList = housingLocationList;
      });
  }

  // click button
  filterResults(text: string) {
    //if text is empty
    if (!text) {
      //  data for loop = data that stored
      this.filteredLocationList = this.housingLocationList;
    }
    //if text is not empty
    // data for loop = data that stored filtered
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
