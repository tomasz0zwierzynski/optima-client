import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../model/models';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  patients: Patient[];

  collectionSize: number;
  page: number = 1;
  pageSize: number = 10;

  ngOnInit(): void {
    this.getPatientPage();
  }

  private getPatientPage() {
    this.patientService.getPatientPage(this.pageSize, this.page - 1).subscribe( response => {
      this.patients = response.elements;
      this.collectionSize = response.totalElements;
    });
  }

  pageChanged() {
    this.getPatientPage();
  }

}
