export class Slide {
    constructor (private image: Image, public className: string) { }
}

export class Image {
    constructor (private src: string, private alt: string) { }
}

export const SLIDES = [
    new Slide(new Image("http://placekitten.com/g/1200/600", "Test Image 1"), "slide-item active"),
    new Slide(new Image("http://placekitten.com/g/1200/650", "Test Image 2"), "slide-item"),
    new Slide(new Image("http://placekitten.com/g/1200/700", "Test Image 3"), "slide-item"),
    new Slide(new Image("http://placekitten.com/g/1200/750", "Test Image 4"), "slide-item"),
    new Slide(new Image("http://placekitten.com/g/1200/800", "Test Image 5"), "slide-item"),
    new Slide(new Image("http://placekitten.com/g/1200/850", "Test Image 6"), "slide-item"),
    new Slide(new Image("http://placekitten.com/g/1200/900", "Test Image 7"), "slide-item")
];
