import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-patient-card',
  imports: [
    NgIf
  ],
  templateUrl: './patient-card.component.html',
  styleUrl: './patient-card.component.scss'
})
export class PatientCardComponent implements OnInit {
  ngOnInit(): void {
     console.log(this.patient);
  }
  @Input() patient: { id: number; name: string; phone?: string; address?: string } | null | undefined;
  @Input() showDetails: boolean = false;

  isDetailsOpen = false;
  isEditing = false;
  editPatient = { name: '', phone: '', address: '' };

  openDetails() {
    this.isDetailsOpen = true;
    this.isEditing = false;
    if (this.patient) {
      this.editPatient = {
        name: this.patient.name,
        phone: this.patient.phone || '',
        address: this.patient.address || ''
      };
    }
  }
  closeDetails() {
    this.isDetailsOpen = false;
    this.isEditing = false;
  }
  enableEdit() {
    this.isEditing = true;
  }
  saveEdit() {
    if (this.patient) {
      this.patient.name = this.editPatient.name;
      this.patient.phone = this.editPatient.phone;
      this.patient.address = this.editPatient.address;
    }
    this.isEditing = false;
  }
  cancelEdit() {
    this.isEditing = false;
    if (this.patient) {
      this.editPatient = {
        name: this.patient.name,
        phone: this.patient.phone || '',
        address: this.patient.address || ''
      };
    }
  }
  onInputChange(field: 'name' | 'phone' | 'address', event: Event) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (this.isEditing && this.editPatient) {
      this.editPatient[field] = target.value;
    }
  }
  printPatient() {
    window.print();
  }
}
