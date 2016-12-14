import { Component, Input } from '@angular/core';

import { Slide } from "./slide";

@Component({
    selector: '[app-slideshow-item]',
    templateUrl: './slideshow-item.component.html',
    styleUrls: ['./slideshow-item.component.css']
})
export class SlideshowItemComponent {

    @Input() slide: Slide;

    constructor() { }

}
