import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {

  Apptitle : string = "myapp";
  @Input() public isUserLoggedIn: boolean;
  constructor() { }

  ngOnInit() {
  }

}
