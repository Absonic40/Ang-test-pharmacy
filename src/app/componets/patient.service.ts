import { Injectable } from '@angular/core';

export interface Patient {
  id: number;
  name: string;
  phone: string;
  address?: string;
}

@Injectable({ providedIn: 'root' })
export class PatientService {
  private patients: Patient[] = [
    { id: 101, name: 'سید محمدرضا', phone: '09110000001', address: 'تهران، خیابان آزادی' },
    { id: 102, name: 'علی رضایی', phone: '09110000002', address: 'مشهد، خیابان امام رضا' },
    { id: 103, name: 'سارا احمدی', phone: '09110000003', address: 'اصفهان، خیابان چهارباغ' },
    { id: 104, name: 'زهرا کریمی', phone: '09110000004', address: 'شیراز، خیابان زند' },
    { id: 105, name: 'حسین موسوی', phone: '09110000005', address: 'تبریز، خیابان ولیعصر' },
    { id: 106, name: 'فاطمه مرادی', phone: '09110000006', address: 'کرج، خیابان مهرشهر' },
    { id: 107, name: 'رضا شریفی', phone: '09110000007', address: 'اهواز، خیابان نادری' },
    { id: 108, name: 'نرگس عباسی', phone: '09110000008', address: 'قم، خیابان صفائیه' },
    { id: 109, name: 'محمد جوادی', phone: '09110000009', address: 'رشت، خیابان گلسار' },
    { id: 110, name: 'لیلا حسینی', phone: '09110000010', address: 'کرمان، خیابان شریعتی' },
  ];

  getPatients() {
    return this.patients;
  }

  addPatient(patient: Omit<Patient, 'id'>) {
    const newId = this.patients.length ? Math.max(...this.patients.map(p => p.id)) + 1 : 1;
    this.patients.push({ id: newId, ...patient });
  }
}