import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Pet} from "../../core/pet.model";

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetListComponent implements OnInit {

  @Input() pets: Pet[] | undefined = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
