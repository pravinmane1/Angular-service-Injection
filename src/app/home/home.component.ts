import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../app-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppInfoService],
})
export class HomeComponent implements OnInit {
  count = 0;
  constructor(private appInfoService: AppInfoService) {
    this.appInfoService.count += 1;
  }
  ngOnInit(): void {
    this.count = this.appInfoService.count;
  }
}
