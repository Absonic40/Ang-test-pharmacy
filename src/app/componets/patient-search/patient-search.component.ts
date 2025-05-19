import { Component } from '@angular/core';
import {PatientCardComponent} from '../patient-card/patient-card.component';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import { PatientService, Patient } from '../patient.service';

@Component({
  selector: 'app-patient-search',
  imports: [
    PatientCardComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './patient-search.component.html',
  styleUrl: './patient-search.component.scss'
})
export class PatientSearchComponent {
  searchId = '';
  searchName = '';
  searchPhone = '';

  constructor(private patientService: PatientService) {}

  get filteredPatients() {
    return this.patientService.getPatients().filter((p: Patient) =>
      (!this.searchId || p.id.toString().includes(this.searchId)) &&
      (!this.searchName || p.name.includes(this.searchName)) &&
      (!this.searchPhone || p.phone.includes(this.searchPhone))
    );
  }
}


