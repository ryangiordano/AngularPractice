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
        let active = 0; 
        setInterval(() => {
            this.slides[active].className = "slide-item";
            this.slides[active + 1].className = "slide-item active";
            active++;
        }, 8000);
    }

}
