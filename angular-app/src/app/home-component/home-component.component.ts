import { Component, OnInit } from '@angular/core';
import { ImageUploadComponentComponent } from '../image-upload-component/image-upload-component.component'
import { ResultCardsComponent } from '../result-cards/result-cards.component'
import { FetchServiceService } from '../fetch-service.service';
import { Router} from '@angular/router';

class ImageSnippet {
	pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
   results: any;
   resultFlag=false;

selectedFile: ImageSnippet;
  constructor(private srv: FetchServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  
  processFile(imageInput: any) {
  this.resultFlag=false;
	console.log("IN process");
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
	  this.selectedFile.pending = true;
      this.results=this.srv.uploadImage(this.selectedFile.file);
	  console.log(this.results);
	  this.resultFlag=true;
        
    });


    reader.readAsDataURL(file);
	this.router.navigate(['/results']);
  }
  
  searchText(query){
  this.resultFlag=false;
	this.results=this.srv.searchText(query);
	this.resultFlag=true;
	this.router.navigate(['/results']);
  }

}
