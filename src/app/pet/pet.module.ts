import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PetListComponent} from './pet-list/pet-list.component';
import {PetComponent} from './pet/pet.component';
import {PetFormComponent} from './pet-form/pet-form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PetListComponent,
    PetComponent,
    PetFormComponent
  ],
  exports: [
    PetListComponent,
    PetComponent,
    PetFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PetModule {
}
