import { Component, OnInit, Input, HostListener, ElementRef, Renderer, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.scss']
})
export class LoadImageComponent implements OnInit {


  @Input() src: string;
  @Input() title: string;

  imgReady: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }


}
