import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public charactersURL: string ="https://anillos-server.vercel.app/api/character"  //aqui iria vercel character

  constructor(private httpClient: HttpClient) { }

  public getAllCharacters() {
    return this.httpClient.get(this.charactersURL)
  }

  public getCharacter(idCharacter: any) {
    return this.httpClient.get(`${this.charactersURL}/${idCharacter}`)
  }
}
 