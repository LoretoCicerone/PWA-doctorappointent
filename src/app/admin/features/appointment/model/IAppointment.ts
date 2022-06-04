import { IDoctor } from "../../doctor/model/IDoctor";
import { IPatient } from "../../patient/model/IPatient";

export interface IAppointment{
    id: string;
    appointmentDate : Date;
    appointmentTime: string;
    patient: IPatient;
    doctorBooked: IDoctor;
}