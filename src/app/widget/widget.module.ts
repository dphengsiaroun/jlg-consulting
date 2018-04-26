import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { FigureComponent } from './figure/figure.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageComponent, FigureComponent],
  exports: [ImageComponent, FigureComponent],
})
export class WidgetModule { }
