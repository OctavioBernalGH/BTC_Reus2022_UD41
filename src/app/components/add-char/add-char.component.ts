import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Chars} from 'src/app/models/chars.model';

@Component({
  selector: 'app-add-char',
  templateUrl: './add-char.component.html',
  styleUrls: ['./add-char.component.css']
})
export class AddCharComponent implements OnInit {


  constructor(private personajesService: PersonajesService) { }

  chars: Chars = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    imagen: ''
  }
  submitted = false;

  ngOnInit(): void {
  }

  saveChars(): void{
    const data = {
      name: this.chars.name,
      status: this.chars.status,
      species: this.chars.species,
      gender: this.chars.gender,
      origin: this.chars.origin,
      location: this.chars.location,
      imagen: this.chars.imagen
    };

    this.personajesService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
          error => {
            console.log(error);
          }
      );
  }

  newChar(): void{
    this.submitted = false;
    this.chars = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      imagen: ''
    };
  }
}
