import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor() {}
  
  public uploadImage(image: File): Observable<Response> {
  console.log("In service");
    /*const formData = new FormData();

    formData.append('image', image);
	
	return new Observable<Response>();

    return this.http.post('/api/v1/image-upload', formData);*/
	return new Observable<Response>();
  }
  
  getProducts(price:number){
	var cardList=[{'name':'Product1', 'description':'description1', 'price':20},
  {'name':'Product2', 'description':'description2', 'price':40},
  {'name':'Product3', 'description':'description3', 'price':10},
  {'name':'Product4', 'description':'description4', 'price':30}];
  
  var cardList2=[];
  for(var x in cardList){
	if(cardList[x]['price']>price)
	cardList2.push(cardList[x]);
  }
  
  return cardList2;
  }
}
