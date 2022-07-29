import { getNumberOfCurrencyDigits } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CatsService } from '../api/cats.service';
import { Cats } from './cats';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsComponent implements OnInit {

  cats: Cats[] = [];
  currentCat: number = 0;
  endGame: boolean = false;
  okayButton: boolean = false;
  viewDislike: boolean = true;

  constructor(private catsService: CatsService) { 
  }

  ngOnInit(): void {
    this.catsService.getCats()
    .subscribe(cats => this.cats = cats);
  }

  like(): void {
    if (this.randomMatch() === true) {
        this.okayButton = true;
        this.viewDislike = false;
      } else {
        if (this.currentCat === (this.cats.length - 1)) {
          this.tryAgainCats();
        } else {
          this.currentCat++;
        }
      }
  }

  dislike(): void {
    if (this.currentCat === (this.cats.length - 1)) {
      this.endGame = true;
      this.viewDislike = false;
    } else {
      this.currentCat++;
    }
  }

  randomMatch(): boolean {
    return Math.random() >= 0.5
  }

  tryAgainCats(): void {
    this.endGame == false;
    this.currentCat = 0;
  }

  continueLike(): void {
    this.okayButton = false;
    this.viewDislike = true;
    if (this.currentCat === (this.cats.length - 1)) {
      this.endGame = true;
      this.viewDislike = false;
    } else {
      this.currentCat++;
    }
  }


}
