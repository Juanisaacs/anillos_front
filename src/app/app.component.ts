import { Component } from '@angular/core';
import { NavigatorInterface, FooterInterface } from './core/models/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'front';
  public navigator: NavigatorInterface[] = [
    {
      name: "home",
      link: "/home"
    },
    {
      name: "characters",
      link: "/characters"
    },
    {
      name: "local",
      link: "/local"
    },
    {
      name: "about",
      link: "/about"
    }
  ];
  public footer: FooterInterface = {
    creator: "JUAN ISAAC CRIADO",
    from: "SIN DORMIR POR ANGULAR"
  }
}
