import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  allowNewServer = false;
  num = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  getIndex = (num) => {
    // if the number is zero the index is zero
    if (num == 0) {
        return 'the index is 0';
    }
    // if the number is 1 the index is 1 or 2 
    if (num == 1) {
        return 'the index is 1 or 2';
    }
    // we will start checking from the third number in the Sequence(index number 2) and count how many numbers are between it and our number
    let tempMinusOne = 1;
    let temp = 2;
    let count = 0;
    while (temp != num) {
        // if temp becomes bigger than num it means that the number is not in the Fibonacci Sequence and we need to break out of the loop 
        if (temp > num) {
            return 'the number is not in the Fibonacci Sequence'
        }
        let oldTemp = temp;
        temp = temp + tempMinusOne;
        tempMinusOne = oldTemp;
        count++;
    }
    return 'the index is ' + (count + 3);
}

}
