import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chars } from 'src/app/models/chars.model';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.css']
})
export class CharDetailsComponent implements OnInit {

  constructor(
    private personajesService: PersonajesService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    currentChar: Chars = {
      name: '',
      status: '',
    }
    message = '';

  ngOnInit(): void {
   this.message = '';
  }

  getChars(id: string): void{
    this.personajesService.getItem(id)
    .subscribe(
      data => {
        this.currentChar = data;
        console.log(data)
      },
      error =>{
        console.log(error);
      }
    );
  }

  updatePublished(status: boolean): void{
    const data = {
      name: this.currentChar.name,
      status: this.currentChar.status,
      species: this.currentChar.species,
      gender: this.currentChar.gender,
      origin: this.currentChar.origin,
      location: this.currentChar.location,
      imagen: this.currentChar.imagen
    };
    this.message = "";


  this.currentChar.update(this.currentChar.id, data)
  .subscribe(
    (    response: { message: string; }) => {
      console.log(response);
      this.message = response.message ? response.message: 'Se actualizou con éxitong';
    },
    (    error: any) =>{
      console.log(error);
    }
  );
}

updateChar():void{
  this.message = "";

  this.personajesService.update(this.currentChar.id, this.currentChar)
  .subscribe(
    (    response: { message: string; }) =>{
      console.log(response);
      this.message = response.message ? response.message: ' Se ha actualizado bieng';
    }
  );
}

deleteChar():void{

}
}



