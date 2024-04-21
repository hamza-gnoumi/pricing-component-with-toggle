import { Option } from './option';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pricing-component-with-toggle';
  word = 'month';
  change() {
    if (this.word === 'month') {
      this.word = 'year';
    } else {
      this.word = 'month';
    }
  }



  optionBasic: Option = {
    title: 'Basic',
    priceMonth: '19.99',
    priceYear: '199.99',
    storage: '500 GB Storage',
    users: '2 Users Allowed',
    send: 'Send up to 3 GB',
  }
  optionPro: Option = {
    title: 'Professional',
    priceMonth: '24.99',
    priceYear: '249.99',
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    send: 'Send up to 10 GB',
  }
  optionMaster: Option = {
    title: 'Master',
    priceMonth: '39.99',
    priceYear: '399.99',
    storage: '2 TB Storage',
    users: '10 Users Allowed',
    send: 'Send up to 20 GB',
  }
}


