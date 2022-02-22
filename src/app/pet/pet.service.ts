import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Pet} from "../core/pet.model";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: BehaviorSubject<Pet[]> = new BehaviorSubject([{name: 'fifi', type: "dog"}, {name: 'mauzi', type: 'cat'}]);

  constructor() {
  }

  loadPets(): Observable<Pet[]> {
    return this.pets.asObservable();
  }

  submit(pet: Pet) {
    this.pets.next([...this.pets.getValue(), pet]);
  }
}
