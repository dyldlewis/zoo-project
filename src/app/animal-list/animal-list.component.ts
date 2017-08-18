import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  filterByAge: string = "allAnimals";
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();


  editButtonHasBeenClicked(kegToEdit: Animal) {
    this.clickSender.emit(kegToEdit);
  }

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
}

  ngOnInit() {
  }

}
