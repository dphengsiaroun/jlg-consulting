import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {


  @Input() src: string;
  @Input() title: string;

  imgReady: boolean = false;

  constructor() { }

  ngOnInit() {
  }


}
