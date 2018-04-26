import { Injectable } from '@angular/core';

@Injectable()
export class LoadImageService {

  constructor() {
    console.log('I am loaded');

  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      console.log('start to load', url);
      const img = new Image();
      img.onload = () => {
        setTimeout(() => {
          console.log('loaded', url);
          resolve();
        }, 2000);
      };
      img.onerror = () => {
        console.log('error', url);
        reject();
      };
      img.src = url;
    });
  }

}
