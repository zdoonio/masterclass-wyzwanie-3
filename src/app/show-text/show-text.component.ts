import { Component, OnInit } from '@angular/core';
import {TextsService} from '../core/services/texts.service';
import { Text } from '@angular/compiler';

@Component({
  selector: 'app-show-text',
  templateUrl: './show-text.component.html',
  styleUrls: ['./show-text.component.css']
})
export class ShowTextComponent implements OnInit {

  public texts: Text[] = [];
  public isError = false;
  public errorMessages = 'Cannot connect with resources';
  public wrong;


  constructor(private textService: TextsService) { }

  ngOnInit() {
    this.textService.getTexts().subscribe(
      texts => {
        // @ts-ignore
        this.texts = texts;
        console.log(this.texts);
    },
      error => {
        this.wrong = error;
        this.isError = true;
      }
  );

  }

  convertColorName(text: string) {
    switch(text) {
      case 'Czerwony': {
        return 'red';
      }
      case 'Niebieski': {
        return 'blue';
      }
      case 'Zielony': {
        return 'green';
      }
      case 'Żółty': {
        return 'yellow';
      }
      case 'Brązowy': {
        return 'brown';
      }
      case 'Czarny': {
        return 'black';
      }
      case 'Różowy': {
        return 'pink';
      }
      default: {
        return 'black';
      }
    }
  }

}
