import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  public localURL: string = 'https://anillos-server.vercel.app/api/local' // aqui iria vercel local 

  constructor(private httpClient: HttpClient) { }

  public getAllLocal(){
    return this.httpClient.get(this.localURL)
  }
  public getLocal(idLocal:any){
    return this.httpClient.get(`${this.localURL}/${idLocal}`)
  }
}
