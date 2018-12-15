import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  quizes: any[]=[];
  index: number;
      constructor(private quizService: QuizService) { }
  ngOnInit() {
    this.index= 0;
    var i = this.index;
    this.quizService.getQuestions().subscribe(res => {
      this.quizes.push(res.data);
      
      console.log(this.quizes);
    }, error => {
      console.log(error);
    })
  }
 nextQuestion(row:number) { 
    var i = 0;
    row[i]++;
  var myarray= JSON.parse(row[i]);
          
    }
  previousQuestion() {

  }
}

