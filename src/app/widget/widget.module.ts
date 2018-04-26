import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { LoadImageComponent } from './load-image/load-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageComponent, LoadImageComponent],
  exports: [ImageComponent, LoadImageComponent],
})
export class WidgetModule { }
