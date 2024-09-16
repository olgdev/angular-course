import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyCalculatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // access modificators
  // public - seted by default, but better set
  // private
  // protected
  // title = "I love Angular";
  // tooltip = "tool tip";
  // showMessage() {
  //   alert("Show Message");
  // }
}
