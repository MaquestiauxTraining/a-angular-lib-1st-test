import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EuiTableComponent } from '../../../eui-table/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EuiTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'eui-table-demo';
}
