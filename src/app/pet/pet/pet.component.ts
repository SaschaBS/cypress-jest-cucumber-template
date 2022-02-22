import {Component, Input, OnInit} from '@angular/core';
import {Pet} from "../../core/pet.model";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  @Input() pet: Pet | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
