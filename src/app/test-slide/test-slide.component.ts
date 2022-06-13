import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  ImageSrc: string;
  ImageAlt: string;
}

@Component({
  selector: 'app-test-slide',
  templateUrl: './test-slide.component.html',
  styleUrls: ['./test-slide.component.css']
})
export class TestSlideComponent implements OnInit {


  @Input() images: carouselImage[] = [];
  @Input() indicators: boolean = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; //default to 3 sec


  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  //Changes slides in every 3 sec
  autoSlideImages(): void{
    setInterval(() => {
      this.onNextClick();
    },this.slideInterval)
  }

  //sets index of image on dot/indicator click
  selectedImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
