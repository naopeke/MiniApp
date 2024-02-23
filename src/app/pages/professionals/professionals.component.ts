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
public professionalDetail:any;


constructor(public  apiService: ProfessionalService,
  private router: Router,
  private rutaActiva: ActivatedRoute,
) {  

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


mostrarUnProfesional(firstName: string, lastName: string): void {
  this.apiService.getOne(firstName, lastName).subscribe({
    next: (resp: Respuesta) => {
      console.log(resp);
      this.professionalDetail = resp[0];
      console.log('Detail: ', this.professionalDetail);
      this.router.navigate(['/profesionales'], { queryParams: { firstName, lastName } });
    },
    error: (error) => {
      console.log('Error: ', error);
    },
    complete: () => {
      console.log('Completed');
    }
  });
}


crearProfesional(firstName: string, lastName:string, age:number, weight:number, height:number, isRetired:boolean, nationality:string, oscarNumber:number, profession:string){
  let newProfessional: Professional = new Professional(
    firstName, lastName, age, weight, height, isRetired, nationality, oscarNumber, profession 
  );
  console.log('Created professional: ', newProfessional);

  this.apiService.add(newProfessional).subscribe({
    next: (resp) => {
      console.log('Response from server:', resp);
      alert('created');
      
      this.router.navigate(['/profesionales']).then(() => {
        this.mostrarTodosProfesionales();
      });
    },
    error: (error) => {
      console.error('Error creating professional:', error);
      alert('error');
    }
  });
}


  


  ngOnInit(): void {
      this.mostrarTodosProfesionales();
  } 
}








