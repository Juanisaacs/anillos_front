import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from '../../service/local.service';
import {LocalInterface} from '../../models/local';

@Component({
  selector: 'app-local-detail',
  templateUrl: './local-detail.component.html',
  styleUrls: ['./local-detail.component.scss']
})
export class LocalDetailComponent implements OnInit {
  public local!: LocalInterface;
  constructor(private activatedRoute: ActivatedRoute, private localService: LocalService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idLocal = params.get('idlocal');

      this.localService.getLocal(idLocal).subscribe((data: any) => {
        const apiResult: LocalInterface = data;
        this.local = apiResult
      })
    })
  }
  
}
