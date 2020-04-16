import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  a = 0;
  b = 0;
  sum = 1;
  total=[];
  str='';

  reset(){
    this.a=0;
    this.b=0;
    this.total=[];
    this.sum = 0;
  }

  

}
