import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PetListComponent} from './pet-list/pet-list.component';
import {PetComponent} from './pet/pet.component';
import {PetFormComponent} from './pet-form/pet-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


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
    HttpClientModule,
    CommonModule,
    FormsModule
  ]
})
export class PetModule {
}
