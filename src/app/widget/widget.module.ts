import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { FigureComponent } from './figure/figure.component';
import { LoadImageService } from './load-image.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LoadImageService],
  declarations: [ImageComponent, FigureComponent],
  exports: [ImageComponent, FigureComponent],
})
export class WidgetModule { }
