import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: "app-my-calculator",
  standalone: true,
  imports: [NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: "./my-calculator.component.html",
  styleUrl: "./my-calculator.component.scss"
})
export class MyCalculatorComponent {
  public first: number = 1;
  public second: number = 1;
  public operation: string = "+";
  public operations: string[] = ["+", "-", "*", "/"];
  public result?: number; // same => public result: number | undefined = undefined;
  public calc() {
    switch (this.operation) {
      case "+": {
        this.result = this.first + this.second;
        break;
      }
      case "-": {
        this.result = this.first - this.second;
        break;
      }
      case "*": {
        this.result = this.first * this.second;
        break;
      }
      case "/": {
        this.result = this.first / this.second;
        break;
      }
    }
  }
}
