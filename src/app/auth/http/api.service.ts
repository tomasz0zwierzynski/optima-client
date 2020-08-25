import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

const apiUrl = `http://localhost:8080`;

export const ENDPOINTS = {

    'TOKEN': `${apiUrl}/auth/token`,
    'CURRENT_USER': `${apiUrl}/auth/current`,

    'REGISTER_USER': `${apiUrl}/manage/register`,
    'ACTIVATE_USER': `${apiUrl}/manage/activate`,
    'USER_ROLES': `${apiUrl}/manage/roles`,

    'API_PATIENTS': `${apiUrl}/api/patients`,
    'API_PATIENTS_SEARCHNAME': `${apiUrl}/api/patients/searchname`,
    'API_PATIENTS_SEARCHID': `${apiUrl}/api/patients/searchid`,
    'API_PATIENTS_ID_COMPLETE': `${apiUrl}/api/patients/{id}/complete`,
    'API_PATIENTS_ID': `${apiUrl}/api/patients/{id}`,
    
    'API_PATIENTS_ID_APPOINTMENT': `${apiUrl}/api/patients/{patientId}/appointments`,
    'API_PATIENTS_ID_APPOINTMENT_ID': `${apiUrl}/api/patients/{patientId}/appointments/{id}`,

}

@Injectable( {providedIn: 'root'} )
export class ApiService {
    
private bracketsRegExp = /{([^}]+)}/g;

    constructor( private http: HttpClient ) {
   
    }
    
    get<T>(endpoint: string, queryParams?: any): Observable<T> {
        let uri = this.resolveUri( endpoint, queryParams );
        
        return this.http.get<T>(uri);
    }

    post<T>(endpoint: string, queryParams?: any, body: any = {}) {
        let uri = this.resolveUri( endpoint, queryParams );

        return this.http.post<T>(uri, body);
    }

    put<T>(endpoint: string, queryParams?: any, body: any = {}) {
        let uri = this.resolveUri( endpoint, queryParams );

        return this.http.put<T>(uri, body);
    }

    delete<T>(endpoint: string, queryParams?: any) {
        let uri = this.resolveUri( endpoint, queryParams );

        return this.http.delete<T>(uri);
    }

    private resolveUri(base: string, queryParams?: any): string {
        let uri = base;

        let currentMatch;
        let found = [];
        while( currentMatch = this.bracketsRegExp.exec(uri) ) {
            found.push( currentMatch[1] );
        }

        found.forEach( pathVariable => {
            if ( queryParams ) {
                if ( queryParams[pathVariable] ) {
                    uri = uri.replace(`{${pathVariable}}`, queryParams[pathVariable] );
                    delete queryParams[pathVariable];
                } else {
                throw new Error('path variable not supplied: ' + pathVariable);
                }
            } else {
                throw new Error('path variable not supplied: ' + pathVariable);
            }
        });

        if ( queryParams ) {
            if ( Object.keys(queryParams).length > 0) {
                uri += '?'
                Object.keys(queryParams).forEach( key => {
                    uri += key + '=' + queryParams[key] + '&';
                });
                uri = uri.substring(0, uri.length - 1);
            }
        }
        return uri;
    }

}