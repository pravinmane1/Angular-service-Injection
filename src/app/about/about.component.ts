import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../app-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AppInfoService],
})
export class AboutComponent implements OnInit {
  count = 0;
  constructor(private appInfoService: AppInfoService) {
    appInfoService.count += 2;
    this.count = this.appInfoService.count;
  }

  ngOnInit() {}
}
