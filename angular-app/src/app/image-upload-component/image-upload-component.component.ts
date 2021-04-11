import { Component, OnInit } from '@angular/core';
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

selectedFile: ImageSnippet;

  constructor(private srv: FetchServiceService) { }

  ngOnInit(): void {
  }
  
   private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
	console.log("In success");
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
	console.log("In error");
  }
  
    processFile(imageInput: any) {
	console.log("IN process");
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
	  this.selectedFile.pending = true;
      this.srv.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });


    reader.readAsDataURL(file);
  }

  

}
