import { Component, OnInit } from '@angular/core';
import { faPowerOff, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  faPower = faPowerOff;
  faBack = faChevronLeft;
  
  constructor() { }

  ngOnInit(): void {
  }

}
