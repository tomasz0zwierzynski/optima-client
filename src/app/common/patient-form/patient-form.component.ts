import { Component, OnInit } from '@angular/core';
import { Sex, Patient } from '../../model/models';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  sexes = Object.values(Sex).filter(e => typeof e === 'string'); // TODO: tłumaczenie

  model = new Patient();

  submitted = false;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.patientService.createPatient(this.model).subscribe( res => {
      this.submitted = true;
      // TODO: kręciołek
    });
  }

  getSex(val: string): Sex {
    return Sex[val];
  }

  newPatient() {
    this.submitted = false;
    this.model = new Patient();
  }

}
