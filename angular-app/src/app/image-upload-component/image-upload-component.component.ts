import { Component, OnInit } from '@angular/core';

class ImageSnippet {
	pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-upload-component',
  templateUrl: './image-upload-component.component.html',
  styleUrls: ['./image-upload-component.component.css']
})
export class ImageUploadComponentComponent implements OnInit {

selectedFile: ImageSnippet;

  constructor() { }

  ngOnInit(): void {
  }
  
   
  
    processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
	  
    });


    reader.readAsDataURL(file);
  }

  

}
