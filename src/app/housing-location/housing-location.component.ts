import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housing-location";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!-- Display the photo of the housing location -->
      <img
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        class="listing-photo"
      />
      <!-- Display the name of the housing location -->
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <!-- Display the location (city and state) of the housing location -->
      <p class="listing-location">
        {{ housingLocation.city }}{{ housingLocation.state }}
      </p>
      <!-- Create a link to the details page of the housing location -->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
