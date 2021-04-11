import { Component, OnInit } from '@angular/core';
import { ImageUploadComponentComponent } from '../image-upload-component/image-upload-component.component'
import { ResultCardsComponent } from '../result-cards/result-cards.component'
import { FetchServiceService } from '../fetch-service.service';
// import { Router } from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


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
  resultFlag = false;
  test = false;

selectedFile: ImageSnippet;
  constructor(private srv: FetchServiceService, private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    
    // this.http.get(`http://localhost:9000/predict`)
    //     .subscribe((data) => {
    //       console.log("data from post endpoint: ", data)
    //     })
  }


  dummyfunc() {
    if (this.test) {
      this.http.get(`http://localhost:9000/predict`)
        .subscribe((data) => {
          console.log("data from post endpoint: ", data)
        })
    }

    
  }
  
  processFile(imageInput: any) {
    this.test = true;
    if (this.test) {
      this.dummyfunc()
    }
  this.resultFlag=false;
	// console.log("IN process");
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log("selectedFile: ", this.selectedFile)
      var extract = this.selectedFile.src;

      // const headers = {
      //   'Access-Control-Allow-Origin': 'http://localhost:3000',
      //   'Access-Control-Allow-Credentials': 'true'};


      // post request - to the model
      // this.http.get(`http://localhost:9000/predict`)
      //   .subscribe((data) => {
      //     console.log("data from post endpoint: ", data)
      //   })
      
      // this.http.post("https://veggie-predictor.herokuapp.com/predict", extract, {headers})
      //   .subscribe((data) => {
      //     console.log("data from post endpoint: ", data)
      // })


	  // this.selectedFile.pending = true;
      // this.results=this.srv.uploadImage(this.selectedFile.file);
	  // console.log("from files: ", this.results);
      this.resultFlag = true;
      
        
    });


    reader.readAsDataURL(file);
    this.router.navigate(['/results']);
    
  }
  
  searchText(query) {
    console.log("query: ", query.value) // searched value

    // storing value in localStorage
    // initialize localStorage keys
      var new_empty_json1 = { "result": query.value }
      var make_it_string1 = JSON.stringify(new_empty_json1);
      localStorage.setItem("result", make_it_string1)


  this.resultFlag=false;
    this.results = this.srv.searchText(query);
	this.resultFlag=true;
	this.router.navigate(['/results']);
  }

}
