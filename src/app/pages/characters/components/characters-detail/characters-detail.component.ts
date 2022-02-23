import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterInterface } from '../../models/characters';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
public character!: CharacterInterface;
  constructor(private ActivatedRoute: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params) =>{
      const idCharacter = params.get('idCharacter');

      this.charactersService.getCharacter(idCharacter).subscribe((data: any)=>{
        const apiResult: CharacterInterface = data;
        this.character = apiResult;
      })
    })
  }

}
