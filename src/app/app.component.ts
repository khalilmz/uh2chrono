import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chrono';

  milSec: any ='0' + 0;
  sec: any ='0' + 0;
  min: any ='0' + 0;
  hr: any ='0' + 0;

  startTimer: any;
  running = false;

  start(): void {
    if(!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.milSec++;
        this.milSec = this.milSec < 10 ? '0' + this.milSec : this.milSec;

        if(this.milSec === 100) {
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.milSec = '0' + 0;
        }
        if(this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }
        if(this.min === 60) {
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0' + 0;
        }
      }, 10)
    } else {
      this.stop();
    }
  }

  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  reset(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.hr = this.min = this.sec = this.milSec = '0' + 0;
  }
}
