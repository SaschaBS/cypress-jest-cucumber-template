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
  petData: Pet[] | undefined;


  constructor(public petService: PetService) {

  }

  ngOnInit(): void {
    this.petService.loadPets().subscribe((value => this.petData = value));
  }


}
