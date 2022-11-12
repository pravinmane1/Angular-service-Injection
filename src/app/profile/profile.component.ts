import { Component, OnInit } from '@angular/core';
import { AppInfoService } from '../app-info.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  count = 0;
  constructor(private appInfoService: AppInfoService) {
    this.count = appInfoService.count;
  }
  ngOnInit() {}
}
