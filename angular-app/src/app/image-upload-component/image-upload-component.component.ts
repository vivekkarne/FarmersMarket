import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';

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
 
    results: any;

selectedFile: ImageSnippet;

  constructor(private srv: FetchServiceService) { }

  ngOnInit(): void {
  }
  
  
    processFile(imageInput: any) {
	console.log("IN process");
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
	  this.selectedFile.pending = true;
      this.results=this.srv.uploadImage(this.selectedFile.file);
	  
	  console.log(this.results);
        
    });


    reader.readAsDataURL(file);
  }

  

}
