import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { PatientService } from '../patient.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-app-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './app-create.component.html',
  styleUrl: './app-create.component.scss'
})
export class AppCreateComponent {
  form = {
    name: '',
    phone: '',
    address: ''
  };

  showModal = false;
  createdCode: number | null = null;

  constructor(private patientService: PatientService) {}

  get customers() {
    return this.patientService.getPatients();
  }

  submitForm() {
    const newPatient = {
      name: this.form.name,
      phone: this.form.phone,
      address: this.form.address
    };
    this.patientService.addPatient(newPatient);
    // فرض بر این که patientService آخرین بیمار را به انتهای لیست اضافه می‌کند
    const patients = this.patientService.getPatients();
    this.createdCode = patients[patients.length - 1]?.id || null;
    this.showModal = true;
    this.form = { name: '', phone: '', address: '' };

  }

  closeModal() {
    this.showModal = false;
    this.createdCode = null;
  }
}
