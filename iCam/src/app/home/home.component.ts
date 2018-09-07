import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public photo: string = "/assets/photos/001.jpg";
  public photoTemplate: string = "/assets/photos/00{c}.jpg";
  photoc: number = 0;
  constructor() { 
    this.changeBackground();
  }

  ngOnInit() {
  }

  changeBackground() {
    this.photoc += 1;
    if(this.photoc == 9) {
      this.photoc = 1;
    }
    this.photo = this.photoTemplate.replace("{c}", this.photoc.toString());
    setTimeout(() => { this.changeBackground(); }, 5000);
  }

}
