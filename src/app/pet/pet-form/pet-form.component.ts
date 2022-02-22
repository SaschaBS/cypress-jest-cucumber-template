import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pet, PetType} from "../../core/pet.model";

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit {
  public name: string = '';
  public type: PetType = 'dog';

  @Output() formSubmit = new EventEmitter<Pet>();

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    this.formSubmit.emit({name: this.name, type: this.type})
  }
}
