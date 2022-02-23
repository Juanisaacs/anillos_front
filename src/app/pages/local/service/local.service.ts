import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  public localURL: string = 'http://localhost:3000/local'

  constructor(private httpClient: HttpClient) { }

  public getAllLocal(){
    return this.httpClient.get(this.localURL)
  }
  public getLocal(idLocal:any){
    return this.httpClient.get(`${this.localURL}/${idLocal}`)
  }
}
