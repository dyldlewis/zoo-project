import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedAnimal = null;
  title = 'app works!';
  masterAnimalList: Animal[] = [
    new Animal("Roger", "Squid", 3, "Carnivore", "Magic Tree House", 3, "Male", "Teryaiki Sauce", "Humans"),
    new Animal("Katie", "Tiger", 5, "Carnivore", "Rain Forest Exibit", 2, "Female", "Killing", "Peace"),
    new Animal("Stevie", "Hippo", 1, "Omnivore", "Swamp City", 1, "Male", "Watermelons", "Anything Green"),
  ]

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimal(clickedAnimal){
  this.selectedAnimal = clickedAnimal;
}

finishedEditing(){
  this.selectedAnimal = null;
}

}
