import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogTestComponent } from "./components/dialog-test/dialog-test.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DialogTestComponent]
})
export class AppComponent {
  title = 'angular-material-learning';
}
