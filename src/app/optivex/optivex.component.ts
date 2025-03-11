import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optivex',
  templateUrl: './optivex.component.html',
  styleUrls: ['./optivex.component.css']
})
export class OptivexComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
