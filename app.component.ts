import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textentered: String = '';

  @ViewChild('myimputref') txt;

  clicked = () => {
    console.log(this.txt);
    this.textentered = this.txt.nativeElement.value;
  }
}  
