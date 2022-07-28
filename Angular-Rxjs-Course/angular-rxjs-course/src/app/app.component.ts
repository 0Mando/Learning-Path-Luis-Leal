import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rxjs-course';
  constructor () {}

  public ngOnInit(): void{
    const counter = interval(1000);
    counter.subscribe((n) =>{
      console.log(`Triggered`)
    })
  }
}
