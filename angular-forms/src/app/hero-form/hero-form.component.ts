import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
   powers = ['Really Smart','Super Flexible','Super Hot','Weather Changer'];
   model = new Hero(12,'Smith',this.powers[0],'Chuck Overstreet');
   submitted = false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(): void {
    this.submitted = true;
    console.log(this.submitted);
  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}





