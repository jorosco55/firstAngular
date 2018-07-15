import { Component, OnInit } from '@angular/core';
import { Pbook} from '../models/pbook';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  model: Pbook = new Pbook();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit Succesful: ', this.model);
  }

}
