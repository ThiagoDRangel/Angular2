import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { helloworldComponent } from './helloworld/helloworld.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, helloworldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
