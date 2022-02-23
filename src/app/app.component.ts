import {Component, OnInit} from '@angular/core';
import {Pet} from "./core/pet.model";
import {PetService} from "./pet/pet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cypress-jest-cucumber-template';
  petData: Pet[] = [];
  error: boolean = false;

  constructor(public petService: PetService) {

  }

  ngOnInit(): void {
    this.petService.loadPets().subscribe((value => this.petData = value));
  }

  submit($event: Pet) {
    this.petService.submit($event).subscribe({
      next: (value) => {
        this.error = false;
        this.petData = [...this.petData, value]
      },
      error: () => {
        this.error = true;
      }
    })
  }
}
