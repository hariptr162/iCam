import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public photos: string[];
  public selectedPhoto: string = "";
  constructor() { 
  }

  ngOnInit() {
    this.photos = [
      "assets/photos/001.jpg",
      "assets/photos/002.jpg",
      "assets/photos/003.jpg",
      "assets/photos/004.jpg",
      "assets/photos/005.jpg",
      "assets/photos/006.jpg",
      "assets/photos/007.jpg",
      "assets/photos/008.jpg"
    ];
  }

  public onImageSelect(photo: string) {
      this.selectedPhoto = photo;
  }

  public hidePhoto(){
    this.selectedPhoto = "";
  }

}
