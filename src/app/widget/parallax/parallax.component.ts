import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoadImageService } from '../load-image.service';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit, OnChanges {


  @Input() src: string;
  smallImg: string;
  state: number;

  constructor(private li: LoadImageService) { }

  ngOnInit() {
    this.smallImg = this.src.replace(/\.(jpg|png)/, '-small.$1');
    (async () => {
      try {
        this.state = 0;
        await this.li.loadImage(this.smallImg);
        this.state = 1;
        await this.li.loadImage(this.src);
        console.log('src', this.src);
        this.state = 2;
      } catch (e) {
        console.error('Cannot load image', this.smallImg, this.src);
      }
    })();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);




  }

}
