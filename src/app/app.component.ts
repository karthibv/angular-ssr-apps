import { CommonModule } from '@angular/common';
import { Component, afterRender } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule , RouterOutlet, FormsModule],
  template: `<button (click)="buttonClick()">increment</button>
            <br>
            {{i}}`,
  styles: []
})
export class AppComponent {
  title = 'SSR';

  i=0;
  ngOnInit(): void {
    console.log("prints in both server and browser - ngOninit");
  }
  constructor(){
    afterRender(()=>{
      // runs on client / browser
      console.log("prints only in browser not in server - constructor ");
     })  }

  buttonClick(){
    console.log("prints only in browser not in server - buttonClick");
    this.i++;
  }

}
