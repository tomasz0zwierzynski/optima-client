export enum Sex {
    'MALE', 'FEMALE', 'UNKNOWN'
}

export class Page<E> {
    totalElements: number;
    totalPages: number;
    perPage: number;
    page: number;
    elements: E[];
}

export class Appointment {
    id: number;
    appointmentDate: string;
    description: string;
    note: string;
    patientId: number;
}

export class AppointmentUpdate {
    appointmentDate: string;
    description: string;
    note: string;
    patientId: number;
}

export class PatientAppoinment {
    id: number;
    firstName: string;
    lastName: string;
    personalId: string;
    sex: Sex;
    address: string;
    appointments: Appointment[];
}

export class Patient {
    id: number;
    firstName: string = '';
    lastName: string = '';
    personalId: string = '';
    sex: Sex = Sex.UNKNOWN;
    address: string = '';
}

export class PatientUpdate {
    firstName: string;
    lastName: string;
    personalId: string;
    sex: Sex;
    address: string;
}
