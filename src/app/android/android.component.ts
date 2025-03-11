import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
