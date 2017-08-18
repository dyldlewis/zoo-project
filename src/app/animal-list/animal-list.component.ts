import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();


  editButtonHasBeenClicked(kegToEdit: Animal) {
    this.clickSender.emit(kegToEdit);
  }
  ngOnInit() {
  }

}
