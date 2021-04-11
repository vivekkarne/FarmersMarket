import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  ngOnIt(): void{
    var new_empty_json1 = { "result": "" }
      var make_it_string1 = JSON.stringify(new_empty_json1);
      localStorage.setItem("result", make_it_string1)
  }
}
