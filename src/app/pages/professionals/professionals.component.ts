import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from 'src/app/shared/professional.service';
import { Respuesta } from 'src/app/models/respuesta';


@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit{
public professional: Professional;
public professionals: Professional[];

public parametro: string;

constructor(public  apiService: ProfessionalService,
  private router: Router,
  private rutaActiva: ActivatedRoute,
) {  


// get bookid from URL
this.parametro = this.rutaActiva.snapshot.params.bookid;
}

mostrarTodosProfesionales(): void {
    this.apiService.getAll().subscribe({
      next: (data: any) => {
        console.log('API Response:', data);
        this.professionals = data; 
        console.log('Professionals:', this.professionals); 
      },
      error: error => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Completed')
      }
    });
  }


mostrarUnProfesional(firstName: HTMLInputElement, lastName: HTMLInputElement): void {
  this.apiService.getOne(firstName.value, lastName.value).subscribe({
    next: (resp: Respuesta) => {
      console.log(resp);
      this.professional = resp.data; 
    },
    error: (error) => {
      console.log('Error: ', error);
    },
    complete: () => {
      console.log('Completed');
    }
  });
}



  


  ngOnInit(): void {
      this.mostrarTodosProfesionales();
  } 
}








