import { Component, AfterContentInit } from '@angular/core';

import { SLIDES, Slide } from './slide';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterContentInit{

    slides: Slide[] = SLIDES;

    constructor() { }

    ngAfterContentInit() {
        let i = 0;
        this.changeSlide(i);
    }

    changeSlide(i) {
        this.slides[i].className = "slide-item";
        i = (i + 1) % this.slides.length;
        this.slides[i].className = "slide-item active";
        setTimeout(this.changeSlide.bind(this, i), 7000);
    }

}
