import { Component, OnInit } from '@angular/core';
import { LocalInterface } from './models/local';
import { LocalService } from './service/local.service'
@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
public local: LocalInterface[] = []
  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.localService.getAllLocal().subscribe((data: any)=>{
      const apiResults: LocalInterface[] = data;
      const fotmattedLocal = apiResults.map(({id, name, image })=>
      ({id, name, image}));
      this.local = fotmattedLocal;
    })
  }

}
