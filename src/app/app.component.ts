import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  a = 0;
  b = 0;
  sum = 0;
  print = [];
  nama = "";

  reset() {
    this.a = 0;
    this.b = 0;
    this.print = [];
    this.sum = 0;
  }

  run() {
    var str = "";
    this.sum = Math.pow(this.a, this.b);

    if (this.sum % 2 == 0) {
      //genap
      this.nama = "Pola B";
      for (let i = this.a; i < this.sum; i++) {
        for (let j = 0; j < i + 1; j++) {
          str += "*";
        }
        this.print.push(str);
        str = "";
      }
    } else {
      for (let i = 0; i < this.b; i++) {
        for (let j = 0; j < this.b - i + 1; j++) {
          str += "*";
        }
        if (i + 1 < this.a) {
          for (let j = 0; j < i + 1; j++) {
            str += "o";
          }
        }
        this.print.push(str);
        str = "";
      }
    }
  }
}
