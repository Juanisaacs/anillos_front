import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from './models/characters';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: CharacterInterface[]=[];
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((data:any) =>{
      const apiResults: CharacterInterface[] = data;
      const formattedCharacters = apiResults.map(({ _id, name,origin, arma, tipo, image})=>({ 
        _id, name, origin,arma, tipo, image}

      ));
      this.characters = formattedCharacters;
  
    })
  }

}

