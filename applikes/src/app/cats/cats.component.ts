import { getNumberOfCurrencyDigits } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CatsService } from '../api/cats.service';
import { Cats } from './cats';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsComponent implements OnInit {

  currentCat: number = 0;
  endGame: boolean = false;
  okayButton: boolean = false;
  viewDislike: boolean = true;

  cats: BehaviorSubject<Cats[]> = new BehaviorSubject<Cats[]>([]);

  constructor(private catsService: CatsService) {
    this.catsService.getCats().subscribe(this.cats);
  }

  ngOnInit(): void {
    
  }

  checkEndList(): void {
    if (this.currentCat === (this.cats.getValue().length - 1)) {
      this.endGame = true;
      this.viewDislike = false;
    } else {
      this.currentCat++;
    }
  }

  like(): void {
    if (this.randomMatch()) {
        this.okayButton = true;
        this.viewDislike = false;
      } else {
        this.checkEndList();
      }
  }

  dislike(): void {
    console.log(this.cats.getValue().length)
    this.checkEndList();
  }

  randomMatch(): boolean {
    return Math.random() >= 0.5
  }

  tryAgainCats(): void {
    this.endGame = false;
    this.viewDislike = true;
    this.currentCat = 0;
  }

  continueLike(): void {
    this.okayButton = false;
    this.viewDislike = true;
    this.checkEndList();
  }


}
