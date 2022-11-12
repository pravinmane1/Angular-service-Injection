import { Component, OnInit, VERSION } from '@angular/core';
import { count } from 'rxjs';
import { AppInfoService } from './app-info.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'to Angular Service Injection ';

  constructor() {}
  ngOnInit(): void {}
}
