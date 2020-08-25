import { Injectable } from '@angular/core';
import { ApiService, ENDPOINTS } from '../auth/http/api.service';
import { Patient, Page, PatientAppoinment, PatientUpdate, Appointment, AppointmentUpdate } from '../model/models';
import { Observable } from '../../../node_modules/rxjs';
import { tap } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor( private api: ApiService ) { }

  getPatientPage(perPage: number, page: number): Observable<Page<Patient>> {
    return this.api.get<Page<Patient>>(ENDPOINTS.API_PATIENTS, {perPage: perPage, page: page}).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  getSinglePatient(id: string) {
    return this.api.get<Patient>(ENDPOINTS.API_PATIENTS_ID, {id: id}).pipe(
      tap( response => {
        console.log(response);
      })
    )
  }

  getCompletePatient(id: string) {
    return this.api.get<PatientAppoinment>(ENDPOINTS.API_PATIENTS_ID_COMPLETE, {id: id}).pipe(
      tap(response => {
        console.log(response);
      })
    )
  }

  searchPatientsByName(text: string) {
    return this.api.get<Patient[]>(ENDPOINTS.API_PATIENTS_SEARCHNAME, {text: text}).pipe(
      tap(response => {
        console.log(response);
      })
    )
  }

  searchPatientsByPersonalId(text: string) {
    return this.api.get<Patient[]>(ENDPOINTS.API_PATIENTS_SEARCHID, {text: text}).pipe(
      tap(response => {
        console.log(response);
      })
    )
  }

  updatePatient(id: string, update: PatientUpdate) {
    return this.api.put<Position>(ENDPOINTS.API_PATIENTS_ID, { id: id }, update ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

  createPatient(object: Patient) {
    return this.api.post<Patient>(ENDPOINTS.API_PATIENTS, {}, object ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

  deletePatient(id: string) {
    return this.api.delete<any>(ENDPOINTS.API_PATIENTS_ID, {id: id}).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  getPatientAppointments(id: string) {
    return this.api.get<Appointment[]>(ENDPOINTS.API_PATIENTS_ID_APPOINTMENT, {patientId: id}).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  getPatientAppointment(patientId: string, appointmentId: string) {
    return this.api.get<Appointment>(ENDPOINTS.API_PATIENTS_ID_APPOINTMENT_ID, {patientId: patientId, id: appointmentId}).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  updatePatientAppointment(patientId: string, appointmentId: string, update: AppointmentUpdate) {
    return this.api.put<Appointment>(ENDPOINTS.API_PATIENTS_ID_APPOINTMENT_ID, {patientId: patientId, id: appointmentId}, update).pipe( 
      tap( response => {
          console.log( response );
      }));
  }

  createPatientAppointment(patientId: string, object: Appointment) {
    return this.api.post<Patient>(ENDPOINTS.API_PATIENTS_ID_APPOINTMENT, {patientId: patientId}, object ).pipe(
      tap( response => {
        console.log( response );
    }));
  }

  deletePatientAppointment(patientId: string, appointmentId: string) {
    return this.api.delete<any>(ENDPOINTS.API_PATIENTS_ID_APPOINTMENT_ID, {patientId: patientId, id: appointmentId}).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

}
