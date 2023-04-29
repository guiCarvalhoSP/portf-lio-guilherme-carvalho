import { Component } from '@angular/core';
import { ICourses, listCourses } from 'src/app/utils/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  cardsContent: ICourses[] = listCourses;

  actualCardsContent: ICourses[] = [];
  qtdInitialCourses: number = 3;
  qtdActualCourses: number = this.qtdInitialCourses;
  allCoursesLoaded: boolean = false;

  constructor(){
  }

  ngOnInit() {
    this.loadCards(this.qtdInitialCourses);
  }

  increaseCardsQtd(): void {
    if(!this.allCoursesLoaded && this.qtdActualCourses < this.cardsContent.length){
      let increase = this.qtdActualCourses + 3;

      this.qtdActualCourses = increase <= this.cardsContent.length ? 
        increase : this.cardsContent.length
    }
    this.loadCards(this.qtdActualCourses);
  }

  loadCards(cardsQtd: number): void {

    this.actualCardsContent = this.cardsContent.slice(0, cardsQtd);

    if(this.qtdActualCourses == this.cardsContent.length) {
      this.allCoursesLoaded = true;
    }

  }
}
