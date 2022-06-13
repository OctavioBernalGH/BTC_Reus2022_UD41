import { Component, OnInit } from '@angular/core';
import { Chars } from 'src/app/models/chars.model';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.css']
})
export class CharListComponent implements OnInit {

  chars?: Chars[];
  currentChar: Chars = {};
  currentIndex = -1;
  title = '';

  constructor(private personajesService: PersonajesService ) { }

  ngOnInit(): void {
    this.retrieveChars();
  }

  retrieveChars():void{
    this.personajesService.list()
    .subscribe(
      data => {
        this.chars = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    );
  }

  refreshList(): void{
    this.retrieveChars();
    this.currentChar = {};
    this.currentIndex = -1;
  }

  setActiveChar(char: Chars, index: number): void{
    this.currentChar = char;
    this.currentIndex = index;
  }

  removeAllChars(id:any): void{
    this.personajesService.delete(id)
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
      }
    );
  }

  searchTitle(): void{
    this.currentChar = {};
    this.currentIndex = -1;

    this.personajesService.filterByTitle(this.title)
    .subscribe(
      data => {
        this.chars = data;
        console.log(data);
      },

        error => {
          console.log(error);
        }
    );
    }
  }

