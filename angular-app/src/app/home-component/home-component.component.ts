import { Component, OnInit } from '@angular/core';
import { ImageUploadComponentComponent } from '../image-upload-component/image-upload-component.component'
import { ResultCardsComponent } from '../result-cards/result-cards.component'

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
