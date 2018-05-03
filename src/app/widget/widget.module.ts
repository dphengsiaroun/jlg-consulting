import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { FigureComponent } from './figure/figure.component';
import { LoadImageService } from './load-image.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LoadImageService],
  declarations: [ImageComponent, FigureComponent, ParallaxComponent],
  exports: [ImageComponent, FigureComponent, ParallaxComponent],
})
export class WidgetModule { }
