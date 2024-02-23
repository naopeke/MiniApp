import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from 'src/app/shared/professional.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() childCard: Professional;


  constructor(private apiService: ProfessionalService){}


  
}