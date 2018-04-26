import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoadImageService } from '../load-image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, OnChanges {


  @Input() src: string;
  smallImg: string;
  state: number;

  constructor(private li: LoadImageService) { }

  ngOnInit() {
    this.state = 0;
    setTimeout(() => {
      this.state = 1;
      setTimeout(() => {
        this.state = 2;
      }, 2000);
    }, 500);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.smallImg = this.src.replace(/\.(jpg|png)/,'-small.$1');
  }

}
