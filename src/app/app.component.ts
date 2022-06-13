import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  loadedFeature = 'recipe'

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }

  images = [
    {
      imageSrc:'https://images.unsplash.com/19/lighthouse.JPG?ixlib=rb-1.2.1',
      imageAlt:'nature1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1652353310311-81143cae3921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1652294107115-fb09643eb46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1654692870756-ea1ebcb8be1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&w=1000&q=80',
      imageAlt: 'person2',
    },
  ]

  //numbers = [1,2,3,4,5];
  // oddNumbers = [1,3,5];
  // evenNumbers = [2,4];
  // onlyOdd = false;
}
