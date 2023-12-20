import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>{{ housingLocationId }}</p> `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;

  constructor() {
    // Get the housing location ID from the URL parameters
    this.housingLocationId = this.route.snapshot.params["id"];
  }
}
