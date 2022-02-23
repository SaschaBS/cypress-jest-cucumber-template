import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Pet} from "../core/pet.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: BehaviorSubject<Pet[]> = new BehaviorSubject([{name: 'fifi', type: "dog"}, {name: 'mauzi', type: 'cat'}]);

  constructor(private httpCLient: HttpClient) {
  }

  loadPets(): Observable<Pet[]> {
    return this.httpCLient.get<Pet[]>('api/pet');
    // return this.pets.asObservable();
  }

  submit(pet: Pet) {
    return this.httpCLient.post<Pet>('api/pet', pet);
    // this.pets.next([...this.pets.getValue(), pet]);
  }
}
