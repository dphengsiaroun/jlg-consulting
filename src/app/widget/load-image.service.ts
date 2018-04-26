import { Injectable } from '@angular/core';
import { sleep } from '../misc';

@Injectable()
export class LoadImageService {

  constructor() {
    console.log('I am loaded');

  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      console.log('start to load', url);
      const img = new Image();
      img.onload = async () => {
        await sleep(2000);
        console.log('loaded', url);
        resolve();
      };
      img.onerror = () => {
        console.log('error', url);
        reject();
      };
      img.src = url;
    });
  }

}
